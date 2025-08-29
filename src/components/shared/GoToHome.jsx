import { Section } from "./Section"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import "../../styles/go-to-home.css"
import meImage from "../../assets/avatars/me.jpg"

export default function GoToHomeSection({ delay = 0 }) {
  const handleGoHome = () => {
    // Navigate to home page - you can implement this based on your routing setup
    window.location.href = "/"
  }

  return (
    <Section delay={delay}>
      <div className="go-to-home-card">
        <div className="profile-image-container">
          <img src={meImage} alt="Profile" className="profile-image" />
        </div>
        <h2 className="profile-name">Sidney</h2>
        <div className="social-icons">
          <span className="social-icon"><Twitter size={16} /></span>
          <span className="social-icon"><Instagram size={16} /></span>
          <span className="social-icon"><Linkedin size={16} /></span>
        </div>
        <button className="btn btn-primary about-me-btn" onClick={handleGoHome}>
          About Me
        </button>
      </div>
    </Section>
  )
}


