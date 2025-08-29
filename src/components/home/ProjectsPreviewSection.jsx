import { Link } from "react-router-dom"
import { FolderOpen } from "lucide-react"
import { Section } from "../shared/Section.jsx"
import aiPortfolio from "../../assets/projects/ai-portfolio.png"
import windowWeather from "../../assets/projects/window-weather.png"
import myPortfolio from "../../assets/projects/my-portfolio.png"
import { motion } from "motion/react"
import "../../styles/projects.css"
import "../../styles/cards.css"

const MotionDiv = motion.div

export default function ProjectsPreviewSection({ delay = 0 }) {
  const projects = [
    { id: 1, image: aiPortfolio, title: "AI Portfolio" },
    { id: 2, image: windowWeather, title: "Weather App" },
    { id: 3, image: myPortfolio, title: "My Portfolio" },
  ]

  return (
    <Section delay={delay}>
      <div className="card-header">
        <div className="card-semi-header">
          <FolderOpen size={16} className="card-icon" />
          <p>Recent Work</p>
        </div>
        <h3>Works Gallery</h3>
      </div>
      
      <div className="carousel-container">
        <motion.div 
          className="carousel-track"
          animate={{
            x: [0, -600],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {[...projects, ...projects, ...projects, ...projects, ...projects, ...projects].map((project, index) => (
            <MotionDiv
              key={`${project.id}-${index}`}
              className="project-thumbnail"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
            </MotionDiv>
          ))}
        </motion.div>
      </div>
      
      <div className="view-works-container">
        <Link className="btn btn-primary" to="/works">View Works</Link>
      </div>
    </Section>
  )
}


