"use client"
import { ILoginRequest } from '@/app/core/application/dto'
import { icons } from '@/app/interface/Icon'
import { Button } from '@/ui/atoms/Button'
import { FormField } from '@/ui/molecules/common/FormField'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
});


const Filter = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter();

  const handleLogin = async (data: ILoginRequest) => {
    console.log(data);
    //SERVICE LOGIN
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        console.log("Ocurrio un error", JSON.parse(result.error));
        handleError(JSON.parse(result.error));
        return;
      }

      // Si el login es exitoso, redirige
      router.push("/dashboard/vehicle");
    } catch (error) {
      console.log(error);
    }
  };

  const handleError = (error: unknown) => {
    const errorData = error as ErrorResponse;

    if (errorData) {
      // Si hay un mensaje de error, lo mostramos en el formulario (por ejemplo, en el campo 'email')
      if (errorData.message) {
        setError("email", {
          message: errorData.message,
        });

      }

      // Si hay un tipo de error, lo mostramos en consola
      if (errorData.error) {
        console.error(`Error type: ${errorData.error}`);
      }

      if (errorData.statusCode) {
        console.log(`HTTP Status Code: ${errorData.statusCode}`);
      }
    }
  };

  return (
    <form className="w-full  p-4 flex justify-end items-center gap-5">
      <FormField<ILoginRequest>
        control={control}
        type="text"
        label="Placa"
        name="email"
        error={errors.email}
      />

      <FormField<ILoginRequest>
        control={control}
        type="text"
        label="Año"
        name="password"
        error={errors.password}
      />

      <FormField<ILoginRequest>
        control={control}
        type="text"
        label="Marca"
        name="password"
        error={errors.password}
      />
      <FormField<ILoginRequest>
        control={control}
        type="text"
        label="Modelo"
        name="password"
        error={errors.password}
      />
      <div className="w-64  flex gap-3 ">
        <Button className="bg-custom-blue text-white p-2" label="Filtrar" type="submit" Icon={icons.filter} classNameIcon='text-2xl' />
        <Button className="bg-white text-custom-black p-2 border border-custom-black" label="Limpiar" type="submit" Icon={icons.deleteLeft} classNameIcon='text-2xl'  />

      </div>


    </form>
  )
}

export default Filter