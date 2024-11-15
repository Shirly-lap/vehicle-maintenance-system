"use client"

import { icons } from '@/app/interface/Icon'
import { Button } from '@/ui/atoms/Button'
import ItemLink from '@/ui/atoms/ItemLink'
import { Title } from '@/ui/atoms/Title'
import { Header } from '@/ui/molecules/common/Header'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const navBarItems = [
  { path: "/dashboard/projects", title: "Proyectos", Icon: icons.car },
  { path: "", title: "Cerrar sesion", Icon: icons.out },


]

const HeaderHome = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Cierra la sesión sin redirigir automáticamente
    router.push("/login"); 
  }

  return (
    <aside className='flex-col p-5 flex gap-5 bg-white '>
      <Title className='font-bold text-2xl'  label='VolunteerConnect' />
      <Header className='flex flex-col gap-2'>
        {navBarItems.map((item, key) => (
          item.title === "Cerrar sesion" ? (
            <Button label={item.title} key={key} onClick={handleLogout} className='dd' Icon={item.Icon} />
          ) : (
            <ItemLink path={item.path} key={key} label={item.title} className='gap-2 flex  border-none' Icon={item.Icon} />
          )
        ))}
      </Header>
    </aside>
  )
}

export default HeaderHome