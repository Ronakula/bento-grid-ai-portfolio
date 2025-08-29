import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "./components/pages/HomePage.jsx"
import ChatPage from "./components/pages/ChatPage.jsx"

export default function App() {
  // Ensure 100vh calculations are correct on mobile by using JS-measured viewport height
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }
    setVh()
    window.addEventListener("resize", setVh)
    window.addEventListener("orientationchange", setVh)
    return () => {
      window.removeEventListener("resize", setVh)
      window.removeEventListener("orientationchange", setVh)
    }
  }, [])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  )
}