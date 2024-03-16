import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover overflow-y-auto">
      <div className="bg-black w-full h-full sm:bg-opacity-50 space-y-4 overflow-y-auto">
        <nav className="px-4 py-4 lg:sticky lg:top-0">
          <Link href="/">
            <Image src="/images/logo.png" width={120} height={40} alt="Logo" />
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
