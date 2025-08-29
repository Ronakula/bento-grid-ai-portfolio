import HomeNav from "../home/HomeNav.jsx"
import MarqueeSection from "../shared/MarqueeSection.jsx"
import StatsSection from "../home/StatsSection.jsx"
import TestimonialsSection from "../home/TestimonialsSection.jsx"
import ProjectsPreviewSection from "../home/ProjectsPreviewSection.jsx"
import ProfileCardSection from "../home/ProfileCardSection.jsx"
import ASKAISection from "../home/ASKAI.jsx"
import WorkTogetherSection from "../home/WorkTogetherSection.jsx"
import "../../styles/layout.css"
import IconGridSection from "../shared/IconGridSection.jsx"
import { Layers2, Code2, Star, Users } from "lucide-react"
import { featuredTechItems } from "../../data/featuredTechItems.js"
import { techStack } from "../../data/allSkills.js"
import { workflowItems } from "../../data/workflowItems.js"
import { socialLinksItems } from "../../data/socialLinksItems.js"
import MobileNav from "../shared/MobileNav.jsx"

export default function HomePage() {

  return (
    <div className="container home">
      <HomeNav />
      <MobileNav />

      <div className="bento-grid">
        <MarqueeSection 
          items={techStack}
          title="Tech Arsenal"
          subtitle="Technologies"
          icon={<Code2 size={16} className="card-icon" />}
          delay={0.05} 
        />
        <StatsSection delay={0.1} />
        <TestimonialsSection delay={0.15} />
        <IconGridSection
          items={workflowItems}
          title="Workflow Highlights"
          subtitle="My Process"
          icon={<Star size={16} className="card-icon" />}
          delay={0.2}
          singleColumn={true}
        />
        <ProjectsPreviewSection delay={0.25} />
        <ProfileCardSection delay={0.3} />
        <IconGridSection
         items={featuredTechItems}
         title="Tech Stack"
         subtitle="Featured"
         icon={<Layers2 size={16} className="card-icon" />}
         delay={0.35} />
        <ASKAISection delay={0.4} />
        <IconGridSection
          items={socialLinksItems}
          title="Online Presence"
          subtitle="Connect With Me"
          icon={<Users size={16} className="card-icon" />}
          delay={0.45}
          singleColumn={true}
        />
        <WorkTogetherSection delay={0.5} />
      </div>
    </div>
  )
}