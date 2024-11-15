import React from 'react'
import { IconType } from 'react-icons'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  children?: React.ReactNode
  className: string,
  classNameIcon?: string,

  Icon?: IconType,
  onClick?: () => void;

}
export const Button = ({ label, Icon, onClick, className, classNameIcon, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`btn-primary ${className}`} onClick={onClick}>
      {Icon &&  <Icon  className={classNameIcon}/>}
      {label}
    </button>
  )
}
