import React from 'react'
import { Title } from '../atoms/Title'

const Logo = () => {
  return (
    <>
      <div className="logo">
        <div className="img">
          <img src="/logo.png" alt="" />
        </div>
        <div className="logo-text">
          <Title label='Transport Solutions'/>
        </div>
      </div>
    </>
  )
}

export default Logo