import { convexToJson } from "convex/values";
import { mutation } from "../_generated/server";
import { v } from "convex/values"; // ✅ Removed trailing space and added semicolon
import { ronbot } from "./lib";
import { validateUserExists } from "./lib"; // ✅ Ensure this is imported if used

export const createThreadForUser = mutation({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    await validateUserExists(ctx.db, { userId: args.userId }); // ✅ Function name fix

    const thread = await ronbot.createThread(ctx, {
      userId: args.userId,
    });

    return thread.threadId;
  },
});
