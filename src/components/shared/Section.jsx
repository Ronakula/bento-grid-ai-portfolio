import { motion } from "motion/react"

const MotionSection = motion.section

export const Section = ({ children, delay = 0 }) => (
  <MotionSection
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </MotionSection>
)


