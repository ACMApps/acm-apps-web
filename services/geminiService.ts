
import { GoogleGenAI } from "@google/genai";

export async function analyzeBusinessProcess(processDescription: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Actúa como un consultor senior de ACM Apps. Un cliente te describe su proceso de negocio: "${processDescription}".
      Realiza un análisis rápido siguiendo el Marco Mental de ACM:
      1. Identifica el cuello de botella potencial.
      2. Propón una estrategia donde la IA aporte valor real.
      3. Sugiere una automatización de lógica de negocio.
      Responde en español, de forma profesional, concisa y estructurada con Markdown.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Lo siento, no he podido generar el análisis en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Error al conectar con la ConsultorIA. Por favor, inténtelo de nuevo más tarde.";
  }
}
