import React, { useState } from 'react';
import { api } from '../../../../convex/_generated/api';
import { useAction } from 'convex/react';
import MessageList from './MessageList'

function ThreadView({ threadId }) {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const sendMessageToAgent = useAction(api.demo.chat.sendMessageToAgent);

  if (!threadId) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setLoading(true);
    sendMessageToAgent({ threadId, prompt: trimmed })
      .finally(() => {
        setLoading(false);
        setMessage('');
      });
  };

  return (
    <div>
      <MessageList threadId = {threadId}/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
          placeholder="Type your message here..."
          disabled={loading}
        />
        <button type="submit" >
          Send
        </button>
      </form>
    </div>
  );
}

export default ThreadView;
