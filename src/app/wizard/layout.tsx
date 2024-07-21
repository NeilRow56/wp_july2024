import React, { ReactNode } from "react";

function WizardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen flex-col  w-full items-center justify-center">
      {children}
    </div>
  );
}
export default WizardLayout;
