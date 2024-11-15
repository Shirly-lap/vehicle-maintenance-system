import React from 'react'

interface ITextProps{
  label : string;
}
export const Text = ({label}: ITextProps) => {
  return (
    <p className='text-primary'>{label}</p>
  )
}
