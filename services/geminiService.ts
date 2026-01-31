
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are a helpful and professional AI assistant for ${PORTFOLIO_DATA.fullName}'s portfolio website. 
Your goal is to answer questions about Alex Sterling's career, skills, and projects based on the following information:
- Full Name: ${PORTFOLIO_DATA.fullName}
- Job Title: ${PORTFOLIO_DATA.jobTitle}
- About: ${PORTFOLIO_DATA.about}
- Skills: ${PORTFOLIO_DATA.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}
- Projects: ${PORTFOLIO_DATA.projects.map(p => `${p.title}: ${p.description}`).join('; ')}
- Timeline: ${PORTFOLIO_DATA.timeline.map(t => `${t.title} at ${t.organization} (${t.period})`).join('; ')}

Keep your answers concise, elegant, and professional. 
If someone asks something not related to Alex, politely redirect them to his professional work.
Respond using friendly but sophisticated language.
`;

export async function askAssistant(message: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
}
