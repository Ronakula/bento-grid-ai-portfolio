import { Section } from "../shared/Section"
import { useEffect, useState, useRef } from "react"
import { motion } from "motion/react"
import { Star } from "lucide-react"
import bradAvatar from "../../assets/avatars/brad.jpg"
import pamAvatar from "../../assets/avatars/pam.jpg"
import eduAvatar from "../../assets/avatars/edu.jpg"
import "../../styles/testimonials.css"
import "../../styles/cards.css"

export default function TestimonialsSection({ delay = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonialHeight, setTestimonialHeight] = useState(200)
  const testimonialRef = useRef(null)
  
  const testimonials = [
    {
      name: "Brad Wilson",
      location: "Nairobi, Kenya. 11, Feb 2024",
      quote: "Sid's software development skills are exceptional. He built a complex AI-powered application that exceeded our expectations and delivered it ahead of schedule.",
      avatar: bradAvatar
    },
    {
      name: "Pam Rodriguez",
      location: "Mombasa, Kenya. 21, Jan 2024",
      quote: "Working with Sid on our design project was incredible. His creative vision and technical expertise brought our ideas to life in ways we never imagined.",
      avatar: pamAvatar
    },
    {
      name: "Edu Mwangi",
      location: "Kisumu, Kenya. 15, Mar 2024",
      quote: "Sid's AI integration skills are game-changing. He helped our team implement machine learning solutions that revolutionized our workflow and productivity.",
      avatar: eduAvatar
    },
    {
      name: "Pam Rodriguez",
      location: "Nakuru, Kenya. 8, Apr 2024",
      quote: "Sid is an outstanding team player. His collaborative approach, clear communication, and problem-solving abilities make him invaluable to any project.",
      avatar: pamAvatar
    }
  ]

  // Create a duplicated array for seamless looping
  const loopedTestimonials = [...testimonials, ...testimonials]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        // When we reach the end of the original testimonials, reset to 0
        if (nextIndex >= testimonials.length) {
          return 0
        }
        return nextIndex
      })
    }, 5000) // Slowed down to 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    if (testimonialRef.current) {
      const testimonialElement = testimonialRef.current
      const height = testimonialElement.offsetHeight
      const marginBottom = parseInt(window.getComputedStyle(testimonialElement).marginBottom)
      const totalHeight = height + marginBottom
      setTestimonialHeight(totalHeight)
    }
  }, [])

  const MotionDiv = motion.div

  return (
    <Section delay={delay}>
      <div className="card-header">
        <div className="card-semi-header">
          <Star size={16} className="card-icon" />
          <p>LinkedIn</p>
        </div>
        <h3>Peer Recommendations</h3>
      </div>
      <div className="testimonials-carousel">
        <MotionDiv
          className="testimonials-track"
          animate={{ y: -currentIndex * testimonialHeight }}
          transition={{ 
            duration: 1.2, 
            ease: [0.4, 0.0, 0.2, 1] 
          }}
        >
          {loopedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial ${index % 2 === 0 ? 'testimonial-even' : ''}`}
              ref={index === 0 ? testimonialRef : null}
            >
              <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-location">{testimonial.location}</div>
                <div className="testimonial-quote">"{testimonial.quote}"</div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </div>
    </Section>
  )
}


