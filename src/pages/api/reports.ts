import fs from "fs";
import path from "path";

const reportsDir = path.join(process.cwd(), "public/reports");

export default function handler(req, res) {
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
    }

    if (req.method === "POST") {
        const report = req.body;
        const fileName = `${report.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.json`;
        const filePath = path.join(reportsDir, fileName);

        if (fs.existsSync(filePath)) {
            return res.status(409).json({ error: "Report with this title exists." });
        }

        fs.writeFileSync(filePath, JSON.stringify(report, null, 2));
        return res.status(201).json({ success: true });
    }

    if (req.method === "GET") {
        const files = fs.readdirSync(reportsDir);
        const reports = files.map((file) => {
            const content = fs.readFileSync(path.join(reportsDir, file), "utf8");
            return JSON.parse(content);
        });
        return res.status(200).json(reports);
    }

    res.status(405).end();
}