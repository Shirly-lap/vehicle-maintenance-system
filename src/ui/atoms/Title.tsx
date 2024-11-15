import React from 'react'

interface ITitleProps{
  label: string;
  className?: string
}
export const Title = ({label, className}:ITitleProps) => {
  return (
    <h1 className={className}>{label}</h1>
  )
}
