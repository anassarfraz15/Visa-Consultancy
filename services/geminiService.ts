
import { GoogleGenAI } from "@google/genai";

export const getVisaAdvice = async (query: string) => {
  if (!process.env.API_KEY) {
    return "API Key not found. Consultations are currently offline.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: "You are the AI Assistant for 'Anas Visa Experts'. You are a world-class visa consultant. Be professional, reassuring, and helpful. Provide general guidance on visas (Student, Work, PR, Tourist) but always emphasize that users should book a formal consultation for legal finality. Keep responses concise and formatted with bullet points where appropriate.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble connecting to our servers. Please try again or call our support line!";
  }
};
