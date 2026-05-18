import { GoogleGenAI } from "@google/genai";
import { Character } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getGhostfaceInsight(character: Character): Promise<string> {
  if (!process.env.GEMINI_API_KEY) return "";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are Ghostface from the Scream franchise. Analyze this character: ${character.name}. 
      Role: ${character.role}, Status: ${character.status}, Appears in movies: ${character.movies.join(', ')}.
      Provide a chilling, 2-sentence psychological analysis or trivia from a killer's perspective. 
      Keep it brief, creepy, and franchise-accurate.`,
      config: {
        maxOutputTokens: 100,
        temperature: 0.8,
      }
    });

    return response.text || "";
  } catch (error) {
    console.error("Error getting Ghostface insight:", error);
    return "Error: Signal lost in the Woodsboro woods...";
  }
}
