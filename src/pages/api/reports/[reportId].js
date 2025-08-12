import fs from "fs";
import path from "path";

const reportsDir = path.join(process.cwd(), "public/reports");

export default function handler(req, res) {
  let { reportId } = req.query;

  // Normalize incoming reportId: lowercase + replace spaces with underscores
  reportId = reportId.toLowerCase().replace(/\s+/g, "_");

  const files = fs.readdirSync(reportsDir);

  // Compare normalized filenames
  const file = files.find(f => f.toLowerCase().includes(reportId));
  if (!file) {
    return res.status(404).json({ error: "Report not found" });
  }

  const filePath = path.join(reportsDir, file);

  if (req.method === "GET") {
    const content = fs.readFileSync(filePath, "utf8");
    return res.status(200).json(JSON.parse(content));
  }

  if (req.method === "PUT") {
    const updatedReport = req.body;
    fs.writeFileSync(filePath, JSON.stringify(updatedReport, null, 2));
    return res.status(200).json({ success: true });
  }

  res.status(405).end();
}
