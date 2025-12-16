import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Note: In a real production app, you should proxy this through a backend to hide the key.
// For this portfolio demo running client-side, we assume the env var is available.
const apiKey = process.env.API_KEY || ''; // Fallback empty string if not defined to avoid runtime crash on load, though will fail on call
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing). Please contact Newaz directly via the form!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 200, // Keep responses concise for a chat widget
      },
    });

    return response.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error. Please try again later.";
  }
};