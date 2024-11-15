import { Title } from '@/ui/atoms/Title'
import React from 'react'
import { IoCarOutline } from 'react-icons/io5'

const LogoLogin = () => {
  return (
    <div className="logo flex flex-col gap-2 text-custom-blue justify-center items-center">
      <IoCarOutline className='' size={40}/>
      <Title className='text-2xl font-semibold' label='Transport Solutions S.A' />
    </div>
  )
}

export default LogoLogin