'use client'

import React, { useState, useEffect } from 'react'
import { FaCog } from 'react-icons/fa'
import { FaWrench } from 'react-icons/fa6'
import { GiGearHammer } from 'react-icons/gi'
import { MdDirectionsCar } from 'react-icons/md'

interface SpinnerProps {
  size?: number
  color?: string
}

export default function VolunteerSpinner({ size = 40, color = 'currentColor' }: SpinnerProps) {
  const icons = [FaCog,GiGearHammer,FaWrench,MdDirectionsCar]  
  // Estado para cambiar entre los íconos
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
    }, 1000) 

    return () => clearInterval(interval)
  }, [])

  // Obtener el ícono actual
  const CurrentIcon = icons[currentIconIndex]

  return (
    <div 
      className="relative w-20 h-20" 
      aria-label="Cargando" 
      role="status"
    >
      <div
        className="absolute inset-0 flex items-center justify-center animate-spin"
        style={{
          animation: 'spin 2s linear infinite',
        }}
      >
        <CurrentIcon
          size={size}
          className={`text-${color} animate-fade-in`}
        />
      </div>
    </div>
  )
}
