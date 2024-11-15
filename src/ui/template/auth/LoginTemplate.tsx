
import { Text } from '@/ui/atoms/Text'
import LogoLogin from '@/ui/molecules/common/LogoLogin'
import LoginForm from '@/ui/organisms/auth/LoginForm'
import React from 'react'

const LoginTemplate = () => {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100">
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
        <div className="header-form">
          <LogoLogin />
        </div>
        <Text label='Inicia sesion en tu cuenta y gestiona tu flota de vehiculos' />
        <LoginForm />
        <Text label='¿Problemas para iniciar sesión? Contacta al administrador del sistema' />

      </div>
    </div>
  )
}

export default LoginTemplate