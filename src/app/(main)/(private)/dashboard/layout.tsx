import AuthGuard from "./guard/AuthGuard";

export default function SectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthGuard>
        <main className=' flex h-screen  w-full'>
          <div className="container-children w-full bg-slate-200 overflow-y-auto">
            {children}
          </div>
        </main>
      </AuthGuard>
    </>
//-
  );
}
