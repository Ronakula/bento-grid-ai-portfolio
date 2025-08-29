import HomeNav from "../home/HomeNav.jsx"
import StatsGrid from "../shared/StatsGrid.jsx"

import GoToHomeSection from "../shared/GoToHome.jsx"
import "../../styles/layout.css"
import IconGridSection from "../shared/IconGridSection.jsx"
import { Sparkle, CircleDot, Code2 } from "lucide-react"
import { hardcoreSkills } from "../../data/hardcoreSkills.js"
import { techStack } from "../../data/allSkills.js"
import MarqueeSection from "../shared/MarqueeSection.jsx"
import { whyChooseMe } from "../../data/whyChooseMe.js"
import MobileNav from "../shared/MobileNav.jsx"
import ChatSection from "../chat/chat.jsx"

export default function ChatPage() {
  // Custom stats for chat page
  const chatStats = [
    { number: "4", icon: "🏁", label: "Projects Built" },
    { number: "15", icon: "💻", label: "Tech Stack" },
    { number: "06", icon: "⭐", label: "Yrs Exp" },
    { number: "24/7", icon: "🤖", label: "AI Support" }
  ]

  return (
    <div className="container chat">
      <HomeNav />
      <MobileNav />

      <div className="bento-grid">
        <StatsGrid 
          stats={chatStats} 
          delay={0.05} 
          showSection={false}
        />
        <GoToHomeSection delay={0.25} />
        <MarqueeSection 
          items={techStack}
          title="Tech Arsenal"
          subtitle="Technologies"
          icon={<Code2 size={16} className="card-icon" />}
          delay={0.05} 
        />
        <ChatSection delay={0.25} />
        <IconGridSection
          items={hardcoreSkills}
          title="Hardcore Skills"
          subtitle="My Skills"
          icon={<Sparkle size={16} className="card-icon" />}
          delay={0.35}
          singleColumn={true}
        />
        <MarqueeSection 
          items={whyChooseMe}
          title="Why to Choose Me?"
          subtitle="Why me"
          icon={<CircleDot size={16} className="card-icon" />}
          delay={0.55} 
        />
      </div>
    </div>
  )
}