import { Section } from "../shared/Section"
import "../../styles/chat.css"

export default function ChatSection({delay = 0}) {
  return (
    <Section delay={delay}>
      <div className="chat-container">

      </div>
    </Section>
  )
}