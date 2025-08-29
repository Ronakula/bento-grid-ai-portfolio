import { Section } from "./Section"
import "../../styles/stats.css"

export default function StatsGrid({ 
  stats = [], 
  delay = 0, 
  showSection = true 
}) {
  // Default stats if none provided
  const defaultStats = [
    { number: "4", icon: "🏁", label: "Projects Built" },
    { number: "15", icon: "💻", label: "Tech Stack" },
    { number: "06", icon: "⭐", label: "Yrs Exp" },
  ]

  const statsToShow = stats.length > 0 ? stats : defaultStats

  const content = (
    <div className='stats-grid'>
      {statsToShow.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-content">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )

  if (showSection) {
    return (
      <Section delay={delay}>
        {content}
      </Section>
    )
  }

  return content
}
