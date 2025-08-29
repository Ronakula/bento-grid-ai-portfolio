import { NavLink } from "react-router-dom"
import "../../styles/layout.css"

export default function MobileNav() {
  return (
    <nav className="mobile-nav">
      <NavLink className="mobile-nav-link" to="/" end>About</NavLink>
      <NavLink className="mobile-nav-link" to="/chat">AskAI</NavLink> 
      <NavLink className="mobile-nav-link" to="/works">Works</NavLink> 
    </nav>
  )
}