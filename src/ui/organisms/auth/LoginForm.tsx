"use client"
import { ILoginRequest } from "@/app/core/application/dto";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { useRouter } from 'next/navigation';
import { FormField } from "@/ui/molecules/common/FormField";
import { Button } from "@/ui/atoms/Button";
import { icons } from "@/app/interface/Icon";
import { ErrorResponse } from "@/app/core/application/dto/common/error-response.dto";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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


const LoginForm = () => {
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
      router.push("/dashboard/projects");
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
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(handleLogin)}
    >
      <FormField<ILoginRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        name="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />

      <FormField<ILoginRequest>
        control={control}
        type="password"
        label="Contraseña"
        name="password"
        error={errors.password}
        placeholder="Ingresa tu contraseña"
      />

      {/* <button
        type="submit"
        className="w-full py-2 px-4 bg-black text-white rounded-lg font-medium hover:bg-blue-600"
      >
        Iniciar Sesión
      </button> */}

      <Button className="bg-custom-blue text-white flex gap-5" label="Iniciar sesión" type="submit" Icon={icons.lock} />

    </form>
  )
}

export default LoginForm