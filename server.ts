import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // API Route: Healthcheck
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", company: "MOIRES FILMS" });
  });

  // API Route: Script Pitch Feedback & Coverage Assistant
  app.post("/api/pitch-feedback", async (req, res) => {
    try {
      const { title, logline, synopsis, genre, format } = req.body;

      if (!title || !logline) {
        return res.status(400).json({ error: "Title and Logline are required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Graceful mock response if key is missing in development preview
        return res.json({
          coverageScore: 88,
          verdict: "RECOMMEND FOR DEVELOPMENT",
          loglineStrength: "Strong hook with clear dramatic stakes and distinctive tonal identity.",
          thematicAnalysis: `Your project "${title}" fits well within MOIRES FILMS' artistic ethos of atmospheric human cinema. The ${genre || "drama"} setting provides rich visual potential.`,
          marketFit: "Strong fit for Tier-1 film festivals (Cannes Un Certain Regard, Venice Horizons, Sundance World Cinema). High potential for art-house theatrical and specialized VOD.",
          creativeSuggestions: [
            "Deepen the protagonist's central moral conflict in Act II.",
            "Emphasize tactile sound design and visual motifs in key turning scenes.",
            "Consider tightening the timeline to heighten narrative tension."
          ],
          moireSuitabilityRating: "9.2/10"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Head of Development at MOIRES FILMS, a premier independent film studio known for evocative, visually stunning, atmospheric cinema (in the vein of A24, Neon, and MUBI).

Analyze the following pitch submission:
- Title: ${title}
- Genre: ${genre || "Independent Narrative"}
- Format: ${format || "Feature Film"}
- Logline: ${logline}
- Synopsis: ${synopsis || "Not provided"}

Return a JSON object (strictly valid JSON without markdown wrapping) containing:
{
  "coverageScore": number (1-100),
  "verdict": "RECOMMEND FOR DEVELOPMENT" | "CONSIDER WITH REVISIONS" | "PASS FOR NOW",
  "loglineStrength": "detailed feedback on the logline's hook, conflict, and protagonist goal",
  "thematicAnalysis": "analysis of themes, visual potential, and alignment with MOIRES FILMS' poetic cinema aesthetic",
  "marketFit": "festival potential, target audience, and distribution positioning",
  "creativeSuggestions": ["bullet point 1", "bullet point 2", "bullet point 3"],
  "moireSuitabilityRating": "score out of 10 with brief rationale"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("No response generated from AI.");
      }

      const parsed = JSON.parse(text);
      res.json(parsed);
    } catch (error: any) {
      console.error("Error in /api/pitch-feedback:", error);
      res.status(500).json({ error: error?.message || "Failed to generate pitch coverage." });
    }
  });

  // API Route: Film Curator Assistant (Asks questions, recommends MOIRES films based on mood)
  app.post("/api/film-assistant", async (req, res) => {
    try {
      const { userMood, preferredPacing, favoriteThemes } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          recommendation: "The Echo of Silent Threads (2025)",
          reason: "Matches your preference for melancholic neo-noir with hypnotic 35mm visuals and intense psychological tension.",
          curatorNote: "Recommended pairing: Midnight viewings with dark ambient soundscapes."
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Chief Curator for MOIRES FILMS film library.
Given user preferences:
- Mood: ${userMood || "Contemplative"}
- Preferred Pacing: ${preferredPacing || "Slow-burn"}
- Themes: ${favoriteThemes || "Memory, isolation, urban neon"}

Pick or craft a cinematic recommendation from MOIRES FILMS catalog (titles like "The Echo of Silent Threads", "Nocturne in Chrome", "Memory of Water", "Velvet Dissonance", "The Glass Weaver").
Return JSON:
{
  "recommendation": "Film Title",
  "tagline": "A punchy, atmospheric tagline",
  "reason": "Detailed explanation why this film fits their mood",
  "curatorNote": "Curator's recommendation on viewing conditions or thematic nuance"
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      res.json(parsed);
    } catch (err: any) {
      console.error("Error in /api/film-assistant:", err);
      res.status(500).json({ error: err?.message || "Curator assistant error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MOIRES FILMS server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
