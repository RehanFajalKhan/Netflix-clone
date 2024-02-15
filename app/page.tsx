import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl text-green-600">
      Netflix Clone
    </h1>
    <Link href="/auth/login" className="text-white bg-red-500">Login
    </Link>
    
    <Link href="/auth/register" className="text-white bg-blue-600">Register</Link>
    </>
    
  );
}
