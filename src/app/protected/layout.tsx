import ExpenseTrackerNavbar from "@/components/ExpenseTrackerNavbar";
import { Logo } from "@/components/Logo";
import Navbar from "@/components/Navbar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ExpenseTrackerNavbar />
      <main className="relative h-screen w-full flex flex-col ">
        <div className="p-5">{children}</div>
      </main>
    </>
  );
};

export default ProtectedLayout;
