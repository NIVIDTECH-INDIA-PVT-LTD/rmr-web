import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        bodyParser: false, // ✅ disable bodyParser for file uploads
    },
};

const reportsDir = path.join(process.cwd(), "public/reports");
const uploadsDir = path.join(process.cwd(), "public/uploads");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
    }
    if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
    }

    if (req.method === "POST") {
        try {
            const form = formidable({
                multiples: false,
                uploadDir: uploadsDir,
                keepExtensions: true,
            });

            const [fields, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
                form.parse(req, (err, fields, files) => {
                    if (err) reject(err);
                    else resolve([fields, files]);
                });
            });

            // Normalize fields (convert string[] to string)
            const report: Record<string, any> = {};
            for (const key in fields) {
                report[key] = Array.isArray(fields[key]) ? fields[key][0] : fields[key];
            }

            // Handle uploaded file
            if (files.image) {
                const uploadedFile = Array.isArray(files.image) ? files.image[0] : files.image;
                report.file = `/uploads/${path.basename(uploadedFile.filepath)}`;
            }

            const safeTitle = report.title?.replace(/[^a-z0-9]/gi, "_").toLowerCase();
            const fileName = `${safeTitle}.json`;
            const filePath = path.join(reportsDir, fileName);

            if (fs.existsSync(filePath)) {
                return res.status(409).json({ error: "Report with this title exists." });
            }

            fs.writeFileSync(filePath, JSON.stringify(report, null, 2));
            return res.status(201).json({ success: true, report });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "File upload failed" });
        }
    }

    if (req.method === "GET") {
        try {
            const files = fs.readdirSync(reportsDir);
            const reports = files.map((file) => {
                const content = fs.readFileSync(path.join(reportsDir, file), "utf8");
                return JSON.parse(content);
            });
            return res.status(200).json(reports);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Failed to load reports" });
        }
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
