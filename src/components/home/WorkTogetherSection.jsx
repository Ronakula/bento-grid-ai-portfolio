import { Crown, Mail, Calendar} from "lucide-react"
import { Section } from "../shared/Section"
import "../../styles/work-together.css"

export default function WorkTogetherSection({ delay = 0 }) {
  return (
    <Section delay={delay}>
      <div className="work-together-card">
        <div className="card-icon-large icon-round-bg"><Crown size={32} /></div>
        <h3 className="work-together-title">Let's Work Together</h3>
        <p className="work-together-subtitle">Let's Make Magic Happen Together!</p>
        <div className="work-actions">
          <button className="btn"><Mail size={16} className="btn-icon" /> Email Me</button>
          <button className="btn btn-primary"><Calendar size={16} className="btn-icon" /> Schedule a Call</button>
        </div>
      </div>
    </Section>
  )
}


