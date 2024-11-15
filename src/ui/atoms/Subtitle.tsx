import React from 'react'

interface ISubtitleProps{
  label: string;
}
export const Subtitle = ({label}:ISubtitleProps) => {
  return (
    <h2 className='subtitle-primary'>{label}</h2>
  )
}
