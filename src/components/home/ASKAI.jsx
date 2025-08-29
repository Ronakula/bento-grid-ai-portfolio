import { Brain, Send } from "lucide-react"
import { Section } from "../shared/Section"
import "../../styles/askai.css"
import "../../styles/cards.css"

export default function ASKAISection({ delay = 0 }) {
  return (
    <Section delay={delay}>
      <div className="card-header">
        <div className="card-semi-header">
          <Brain size={16} className="card-icon" />
          <p>AI Assistant</p>
        </div>
        <h3>Ask my Assistant</h3>
      </div>
      <div className="askai-chat">
        <div className="chat-message">
          <div className="ai-avatar">AI</div>
          <div className="message-content">
            <p>Hello! 👋 How can I help you today?</p>
            <p className="message-subtitle">I can help you explore my portfolio, projects, and skills.</p>
          </div>
        </div>
        <div className="chat-input-container">
          <input 
            type="text" 
            placeholder="Ask me anything about my work..."
            className="chat-input"
            onFocus={() => {
              // This will be replaced with actual chatbot integration later
              // For now, it can link to the works page
              window.location.href = '/works'
            }}
          />
          <button className="send-button">
            <Send size={16} />
          </button>
        </div>
      </div>
    </Section>
  )
}


