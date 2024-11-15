import React from 'react'
import { IconType } from 'react-icons'
import Link from 'next/link';

interface LinkProps {
  path: string,
  label: string,
  Icon?: IconType
  className: string,
  classNameIcon?: string,

  
}

const ItemLink = ({ path, label, Icon, className, classNameIcon }: LinkProps) => {
  return (
    <Link href={path} className={`btn-primary ${className}`}>
      {Icon && <Icon className={classNameIcon}></Icon>}
      {label}
    
    </Link>
  )
}

export default ItemLink;