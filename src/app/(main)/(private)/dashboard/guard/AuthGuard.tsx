"use client"
import VolunteerSpinner from "@/ui/molecules/common/spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data, status } = useSession()
  console.log(data, status);
  const router = useRouter()
  console.log(data, status)
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }

  }, [status, router])

  if (status === "authenticated") {
    return (
      <>
        {children}
      </>
    )
  }
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <VolunteerSpinner size={40} color="blue-700" />
      </div>
    )
  }
}
