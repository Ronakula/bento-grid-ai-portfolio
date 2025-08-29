import { NavLink } from "react-router-dom"
import "../../styles/layout.css"

export default function HomeNav() {
  return (
    <nav className="nav">
      <div><strong>Sidney</strong></div>
      <div style={{ display: "flex", gap: 16 }}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/chat">Chat</NavLink>
      </div>
    </nav>
  )
}


