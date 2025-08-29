import { Agent } from "@convex-dev/agent"
import {mutation , action, query} from "../_generated/server"
import {components} from "../_generated/api";
import {google} from "@ai-sdk/google"
import {v} from "convex/values"
import { paginationOptsValidator } from "convex/server";

const DEMO_USER_ID ="demo-user-123"

const myAgent= new Agent(components.agent,{
 name: "Sidbot",
 languageModel: google("gemini-2.0-flash"),
 textEmbeddingModel: google.textEmbeddingModel('text-embedding-004'),
instructions :"You are a helpful assistant on sidney's  portfolio's website . Keep  your answers consise",

 })
    


export const  createThread = mutation({
    args: {},
    handler: async (ctx)=>{
        const {threadId} = await myAgent.createThread(ctx,{
            userId: DEMO_USER_ID

        })
        return threadId
    }
})
export const sendMessageToAgent= action({
    args:{
        threadId: v.string(),
        prompt: v.string()
    },
    handler: async(ctx,args) =>{
        const {thread} = await myAgent.continueThread(ctx,{
            threadId: args.threadId
        })
        const result = await thread.generateText({
            prompt: args.prompt
        })
        return result.text
    }
})
export const listThreadMessages = query({
    args:{
        threadId: v.string(),
        paginationOpts:paginationOptsValidator
    },
    handler: async (ctx, args) =>{
        return await myAgent.listMessages(ctx,{
            threadId: args.threadId,
            paginationOpts: args.paginationOpts
           // excludeToolMessages: true

        })
    }
})