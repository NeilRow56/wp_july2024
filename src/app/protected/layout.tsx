import { Logo } from "@/components/Logo";
import Navbar from "@/components/Navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="relative h-screen w-full flex flex-col items-center justify-center ">
        <div className="mt-12">{children}</div>
      </main>
    </>
  );
};

export default ProtectedLayout;
