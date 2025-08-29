import { Layers2 } from "lucide-react"
import { Section } from "./Section"
import "../../styles/tech-stack.css"
import "../../styles/cards.css"
import React from "react"

export default function IconGridSection({ 
  items = [], 
  title = "Tech Stack", 
  subtitle = "Featured",
  icon = <Layers2 size={16} className="card-icon" />,
  delay = 0,
  singleColumn = false
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
      <div className={`tech-grid ${singleColumn ? 'single-column' : ''}`}>
        {items.map((item, index) => (
          <div key={index} className="tech-item">
            {typeof item.icon === 'string' ? (
              <div className="tech-icon-container">
                <img src={item.icon} alt={item.name} className="tech-icon" />
              </div>
            ) : (
              <div className="tech-icon-container">
                <span className="tech-icon">
                  {React.createElement(item.icon, { size: 16 })}
                </span>
              </div>
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
