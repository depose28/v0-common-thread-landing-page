"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main
      className="relative min-h-screen bg-[#1e1e1e] text-white overflow-hidden flex flex-col cursor-none"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-[#e85a2c] transition-all duration-200 ${
            isHovering ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        />
      </div>

      {/* Background arcs */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 h-[160%] w-auto"
          viewBox="0 0 800 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Concentric elliptical arcs */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <ellipse
              key={i}
              cx="800"
              cy="500"
              rx={120 + i * 55}
              ry={200 + i * 70}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              fill="none"
            />
          ))}
          {/* Top right dots */}
          <circle cx="720" cy="60" r="3" fill="white" />
          <circle cx="780" cy="180" r="3" fill="#e85a2c" />
          {/* Upper right dots */}
          <circle cx="700" cy="280" r="3" fill="white" />
          <circle cx="760" cy="380" r="3" fill="white" />
          {/* Middle right dots */}
          <circle cx="720" cy="500" r="3" fill="#e85a2c" />
          <circle cx="780" cy="620" r="3" fill="white" />
          {/* Lower right dots */}
          <circle cx="700" cy="740" r="3" fill="#e85a2c" />
          <circle cx="760" cy="860" r="3" fill="white" />
          <circle cx="720" cy="950" r="3" fill="white" />
        </svg>
      </div>

      {/* Top label */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pt-10 md:pt-14"></div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-4xl">
        <h1 className="text-[clamp(2rem,8vw,6rem)] font-light tracking-tight leading-none mb-6 md:mb-8 whitespace-nowrap">
          Common Thread II
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/50 font-light max-w-md md:max-w-lg leading-relaxed">
          A fund of funds for the structural transitions reshaping the modern economy.
        </p>

        {/* Contact link */}
        <a
          href="mailto:info@commonthread.capital"
          className="inline-block mt-10 md:mt-12 text-sm text-white/40 hover:text-[#e85a2c] transition-colors duration-300 tracking-wide cursor-none"
        >
          Contact →
        </a>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 pb-8 md:pb-10"></div>
    </main>
  )
}
