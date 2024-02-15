import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full bg-[url('/images/background.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-5 py-5">
          <Link href='/'>
          <Image src="/images/logo.png" width={148} height={40} alt="Logo" />
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
