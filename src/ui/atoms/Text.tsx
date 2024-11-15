import React from 'react'

interface ITextProps{
  label : string;
  className?: string,
}
export const Text = ({label, className}: ITextProps) => {
  return (
    <p className={`text-primary text-custom-black ${className}`}>{label}</p>
  )
}
