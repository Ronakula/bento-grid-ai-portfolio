import { mutation, query } from "./_generated/server";
import{ v } from "convex/values"

export const createAnonymousUser = mutation({
    args:{},
    handler:async (ctx) =>{
        
        return ctx.db.insert("users",{
            kind: "anonymous" 
        })
    }
})
export const  findUser= query({
    args: {
        id: v.id("users")
    },
    handler: async(ctx, args) =>{
        return ctx.db.get(args.id)
    }
})