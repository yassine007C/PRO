import express, { Express, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../../public");

  if (fs.existsSync(distPath)) {
    console.log(`Serving static files from: ${distPath}`);
    
    // ✅ Static files أولاً
    app.use(express.static(distPath));
    
    // ✅ Catch-all بطريقة Express v5 الآمنة
    app.use((req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    console.log("Public folder not found - API only mode");
  }
}
