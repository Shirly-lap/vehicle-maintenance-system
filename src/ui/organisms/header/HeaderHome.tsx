"use client"

import { CustomSession } from '@/app/api/auth/[...nextauth]/route'
import { icons } from '@/app/interface/Icon'
import { Button } from '@/ui/atoms/Button'
import ItemLink from '@/ui/atoms/ItemLink'
import { Text } from '@/ui/atoms/Text'
import { Header } from '@/ui/molecules/common/Header'
import Logo from '@/ui/molecules/common/Logo'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const navBarItems = [
  { path: "/dashboard/projects", title: "Proyectos", Icon: icons.car },
  { path: "", title: "Cerrar sesion", Icon: icons.out },
]

const HeaderHome = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  }

  const { data: sesion } = useSession()
  const userSesion = sesion as CustomSession
  return (
    <aside className='flex-col p-5 flex gap-5 w-80'>

      <Logo />
      <hr />
      <div className="profile flex flex-col items-center gap-3">
        <FaUserCircle size={50} className='text-custom-blue' />
        <Text label={userSesion.user.email!}/>
      </div>
      <Header className='flex flex-col gap-2 items-start'>
        {navBarItems.map((item, key) => (
          item.title === "Cerrar sesion" ? (
            <Button label={item.title} key={key} onClick={handleLogout} className='text-custom-black' Icon={item.Icon} classNameIcon='btn-icon' />
          ) : (
            <ItemLink path={item.path} key={key} label={item.title} className='flex  border-none text-custom-black' Icon={item.Icon} classNameIcon='btn-icon ' />
          )
        ))}
      </Header>
    </aside>
  )
}

export default HeaderHome