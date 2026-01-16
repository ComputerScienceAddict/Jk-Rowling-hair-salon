"use client"

import { useEffect, useState } from "react"

export function SakuraDecoration() {
  const [petals, setPetals] = useState<{ id: number; left: number; delay: number; duration: number; size: number }[]>(
    [],
  )

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 7,
      size: 12 + Math.random() * 12,
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-fall opacity-60"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 24 24" className="text-pink-300 animate-spin-slow">
            <path fill="currentColor" d="M12 2C12 2 8 6 8 10C8 12 9.5 14 12 14C14.5 14 16 12 16 10C16 6 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
