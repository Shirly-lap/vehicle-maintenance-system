import React from 'react'
import { Title } from '../../atoms/Title'
import image from '@/assets/img/logo.png'
const Logo = () => {
  return (
    <>
      <div className="flex gap-2 items-center w-full">
        <div className="img">
          <img src={image.src} alt="logo" />
        </div>
        <div className="logo-text">
          <Title label='Transport Solutions' className='font-bold text-base	 text-custom-black' />
        </div>
      </div>
    </>
  )
}

export default Logo