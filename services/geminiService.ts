import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateCompanyLogo = async (description: string): Promise<string> => {
  const ai = getAiClient();
  
  // Enhanced prompt for Chuangjia Zhimu logo
  const prompt = `Design a logo for "Chuangjia Zhimu" (创嘉智木).
  Core Concepts:
  1. "Zhimu" (Smart Wood): Combine natural wood textures/elements with futuristic circuitry or AI glowing nodes.
  2. "Chuangjia" (Innovation/Excellence): Minimalist, modern, upward momentum.
  
  User Requirements: ${description}
  
  Visual Style:
  - Modern Tech + Natural Warmth (Wood & Tech).
  - Clean vector shapes.
  - Professional corporate identity.
  - High contrast, suitable for white background.`;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: '1:1',
        outputMimeType: 'image/jpeg',
      },
    });

    const base64ImageBytes = response.generatedImages?.[0]?.image?.imageBytes;
    if (!base64ImageBytes) {
      throw new Error("No image generated");
    }
    return `data:image/jpeg;base64,${base64ImageBytes}`;
  } catch (error) {
    console.error("Error generating logo:", error);
    throw error;
  }
};