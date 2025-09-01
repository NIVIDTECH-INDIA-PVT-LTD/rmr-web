import fs from "fs";
import path from "path";
import formidable from "formidable";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: { bodyParser: false }, // required for formidable
};

const reportsDir = path.join(process.cwd(), "public/reports");
const uploadsDir = path.join(process.cwd(), "public/uploads");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Allow CORS (adjust as needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,PUT,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { reportId } = req.query;
  if (!reportId || Array.isArray(reportId)) {
    return res.status(400).json({ error: "Invalid reportId" });
  }

  // Normalize report filename
  const fileNamePart = reportId.toLowerCase().replace(/\s+/g, "_");
  const files = fs.readdirSync(reportsDir);
  const file = files.find(f => f.toLowerCase().includes(fileNamePart));

  if (!file) return res.status(404).json({ error: "Report not found" });

  const filePath = path.join(reportsDir, file);

  // ------------------- GET -------------------
  if (req.method === "GET") {
    const content = fs.readFileSync(filePath, "utf8");
    return res.status(200).json(JSON.parse(content));
  }

  // ------------------- DELETE -------------------
  if (req.method === "DELETE") {
    try {
      const existingReport = JSON.parse(fs.readFileSync(filePath, "utf8"));
      // Delete associated image
      if (existingReport.file) {
        const imgPath = path.join(process.cwd(), "public", existingReport.file);
        if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
      }
      fs.unlinkSync(filePath);
      return res.status(200).json({ success: true, message: "Report deleted successfully" });
    } catch (err: any) {
      return res.status(500).json({ error: "Failed to delete report", details: err.message });
    }
  }

  // ------------------- PUT -------------------
  if (req.method === "PUT") {
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

    const form = formidable({ multiples: false, uploadDir: uploadsDir, keepExtensions: true });

    try {
      const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve([fields, files]);
        });
      });

      // Load existing report
      const oldReport = JSON.parse(fs.readFileSync(filePath, "utf8"));

      // Normalize fields
      const updatedReport: Record<string, any> = {};
      for (const key in fields) {
        updatedReport[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
      }

      // Handle image upload
      if (files.image) {
        const uploadedFile = Array.isArray(files.image) ? files.image[0] : files.image;
        updatedReport.file = `/uploads/${path.basename(uploadedFile.filepath)}`;

        // Delete old image
        if (oldReport.file) {
          const oldImagePath = path.join(process.cwd(), "public", oldReport.file);
          if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
        }
      } else {
        // Preserve existing image
        updatedReport.file = oldReport.file;
      }

      // Save updated JSON
      const newFileName = `${updatedReport.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.json`;
      const newFilePath = path.join(reportsDir, newFileName);

      // Avoid overwriting another report
      if (filePath !== newFilePath && fs.existsSync(newFilePath)) {
        return res.status(409).json({ error: "Report with this title already exists." });
      }

      if (filePath !== newFilePath) fs.unlinkSync(filePath); // remove old file if renamed
      fs.writeFileSync(newFilePath, JSON.stringify(updatedReport, null, 2));

      return res.status(200).json({ success: true, report: updatedReport });
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ error: "Failed to update report", details: err.message });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
