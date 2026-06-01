import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Lazy initialize client
  let ai: GoogleGenAI | null = null;
  function getAI() {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY || "";
      ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return ai;
  }

  // Health endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Insights endpoint
  app.post("/api/insight", async (req, res) => {
    try {
      const { character } = req.body;
      if (!character) {
        return res.status(400).json({ error: "Missing character context" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        // Fallback profile if key is missing/placeholder
        return res.json({
          insight: `[GHOSTWATCH OFFLINE] ${character.name} is categorized as ${character.role.toUpperCase()} under the ${character.community.toUpperCase()} community. Status is specified as ${character.status.toUpperCase()}. Extreme profiling recommended.`
        });
      }

      const aiInstance = getAI();
      const response = await aiInstance.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are Ghostface from the Scream franchise. Analyze this character: ${character.name}. 
        Role/Categorization: ${character.role}, Status: ${character.status}, Appears in movies: ${character.movies.join(', ')}, Community cluster alignment: ${character.community}.
        Provide a chilling, 2-sentence psychological analysis or trivia from a killer's perspective. 
        Keep it brief, eerie, extremely franchise-accurate, and directed at their relationships or fate. Direct and chilling; do not use quotes around the response.`,
      });

      const text = response.text || "Error: Signal lost in the Woodsboro woods...";
      res.json({ insight: text.trim() });
    } catch (error) {
      console.error("Error generating Ghostface analysis:", error);
      res.status(500).json({ error: "Signal lost in the Woodsboro woods..." });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
