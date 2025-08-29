import { User, Download, MapPin, Globe, GraduationCap, Clock, Building2, Heart, Send, MessageSquare } from "lucide-react"
import { Section } from "../shared/Section"
import meImage from "../../assets/avatars/me.jpg"
import whatsappIcon from "../../assets/whatsapp.svg"
import { useState, useEffect } from "react"
import "../../styles/profile-card.css"

function TypingAnimation() {
  const [text, setText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = ["Developer", "Software Developer", "AI Enthusiast"]
  const currentRole = roles[currentIndex]
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000) // Wait 2 seconds before deleting
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 100 : 150) // Faster deletion, slower typing
    
    return () => clearTimeout(timeout)
  }, [text, currentIndex, isDeleting, currentRole, roles.length])
  
  return (
    <span className="typing-text">
      {text}
      <span className="cursor">|</span>
    </span>
  )
}

export default function ProfileCardSection({ delay = 0 }) {
  return (
    <Section delay={delay}>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={meImage} alt="Profile" className="avatar-image" />
          </div>
          <div className="profile-info">
            <div className="profile-status">
              <div className="status-container">
                <div className="status-dot"></div>
                <span>Available To Work</span>
              </div>
              <button className="btn btn-primary">Resume <Download size={16} /></button>
            </div>
            <h1>Sidney</h1>
            <p className="profile-tagline">
              I am <TypingAnimation />
            </p>
          </div>
        </div>
        <div className="profile-tags">
          <span className="tag"><MapPin size={12} /> Kenya & Nairobi</span>
          <span className="tag"><Globe size={12} /> English & Swahili</span>
          <span className="tag"><GraduationCap size={12} /> Software Engineer</span>
          <span className="tag"><Clock size={12} /> EST</span>
          <span className="tag"><Building2 size={12} /> Multimedia University</span>
        </div>
        <div className="profile-actions">
          <button className="btn btn-full"><Send size={16} /> Telegram Me</button>
          <button className="btn btn-full">
            <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
            WhatsApp Me
          </button>
        </div>
      </div>
    </Section>
  )
}


