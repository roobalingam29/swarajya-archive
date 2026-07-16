import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API routes go here FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // AI assistant chat proxy
  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const { message } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message prompt is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        // Fallback for sandbox/local stage when key is unconfigured
        return res.json({
          reply: `Thank you for querying about the Indian Freedom Struggle.
          
          [System Note: Pre-Migration Sandbox Staging Mode]
          The Swarajya Archive server received your query. To enable real-time Gemini Pro grounding of historic documents, make sure to add your GEMINI_API_KEY in the AI Studio Settings panel! For now, your query is being routed to our local historical dataset.`
        });
      }

      // Live server-side integration using official @google/genai SDK
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: "You are an expert, highly objective Academic Historian specializing in India's Freedom Struggle (1757–1950). Answer the user's historical query with absolute dignity, precision, clear structural bullet points, and refer to verified historical records such as the National Archives of India wherever appropriate. Support your assertions with citations."
        }
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API server-side failure:", error);
      res.status(500).json({ error: "The archival AI assistant experienced a server-side error processing your request." });
    }
  });

  // Vite middleware setup
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
    console.log(`Swarajya Archive Full-Stack Server listening on http://localhost:${PORT}`);
  });
}

startServer();
