const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="relative h-screen w-full flex flex-col items-center justify-center bg-[#1B4242]">
        <div className="mt-12">{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
