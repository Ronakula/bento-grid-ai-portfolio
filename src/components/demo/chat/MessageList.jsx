import React from 'react'
import { useThreadMessages } from "@convex-dev/agent/react"
import { api } from "../../../../convex/_generated/api"

function MessageList({ threadId}) {
const messageResult = useThreadMessages(
    api.demo.chat.listThreadMessages,
    {threadId},
    {initialNumItems: 10}
);

if(!messageResult || messageResult.results.length ===0){
    return <div>No messages found</div>
}

  return (
    <div>
      {
        messageResult.results.map((message) =>{
         if(!message.message) return null
         const isUser = message.message.role ==='user'

        return(
            <div key={message._id}>
                {
                    isUser ? <div>You: {message.text}</div> : <div>Assistant: {message.text}</div>
                }

            </div>
        )

        })
      }
    </div>
  )
}

export default MessageList