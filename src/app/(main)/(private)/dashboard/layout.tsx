import HeaderHome from "@/ui/organisms/header/HeaderHome";
import AuthGuard from "./guard/AuthGuard";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthGuard>
        <main className=' flex h-screen  w-full'>
          <HeaderHome />
          <div className="container-children w-full  overflow-y-auto">
            {children}
          </div>
        </main>
      </AuthGuard>
    </>
    //-
  );
}
