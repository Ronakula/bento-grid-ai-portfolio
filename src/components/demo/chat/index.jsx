import React, { useState } from 'react';
import {api} from "../../../../convex/_generated/api"
import { useMutation } from 'convex/react';
import ThreadView from './ThreadView'
function ChatSection() {
  const createThread= useMutation(api.demo.chat.createThread)
  const [threadId, setThreadId] = useState(null);

  return (
    <div>
      <div>
       
        <h1>Convex Agent Demo Chat</h1>
      </div>
      {threadId ? (
        <ThreadView threadId={threadId}/>
      ) : (
        <div>
          <div>No Thread Created yet</div>
          <button onClick={() => createThread().then(setThreadId)}>
            Create Thread
            </button>
        </div>
      )}
    </div>
  );
}

export default ChatSection;
