import { components } from "../_generated/api";
import { google } from "@ai-sdk/google";
import { Agent } from "@convex-dev/agent";

export const ronbot = new Agent(components.agent, {
  name: "Ronbot",
  chat: google("gemini-2.0-flash"),
  textEmbedding: google.textEmbeddingModel("text-embedding-004"),
  instructions: `
    You are Ronbot, a helpful assistant on Sid's portfolio website.
    Help users with questions about Sid's work and experience.
    Respond in markdown format with a casual tone.
  `,
});

export const validateUserExists = async (db, args) => {
  const user = await db.get(args.userId);
  if (!user) throw new Error(`User not found with id ${args.userId}`);
  return user;
};
