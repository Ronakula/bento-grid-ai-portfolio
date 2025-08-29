import { Code2 } from "lucide-react"
import { Section } from "./Section"
import "../../styles/tech-stack.css"
import "../../styles/cards.css"

export default function MarqueeSection({ 
  items = [], 
  title = "Tech Stack", 
  subtitle = "Technologies",
  icon = <Code2 size={16} className="card-icon" />,
  delay = 0 
}) {
  return (
    <Section delay={delay}>
      <div className="card-header">
        <div className="card-semi-header">
          {icon}
          <p>{subtitle}</p>
        </div>
        <h3>{title}</h3>
      </div>
      
      <div className="marquee-container">
        {/* Top row - moving right */}
        <div className="marquee marquee-top">
          <div className="marquee-content">
            {items.map((item, index) => (
              <span key={`top-${index}`} className="tech-tag">
                {item}
              </span>
            ))}
            {items.map((item, index) => (
              <span key={`top-duplicate-${index}`} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom row - moving left */}
        <div className="marquee marquee-bottom">
          <div className="marquee-content reverse">
            {items.map((item, index) => (
              <span key={`bottom-${index}`} className="tech-tag">
                {item}
              </span>
            ))}
            {items.map((item, index) => (
              <span key={`bottom-duplicate-${index}`} className="tech-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
