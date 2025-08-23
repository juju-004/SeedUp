import Image from "next/image";
import { ReactNode } from "react";

export default function SignIn({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container z-10 mx-auto">
        <div className="flex min-h-screen flex-wrap items-center">
          {children}
        </div>
      </div>
      <div className="fixed inset-y-0 right-0 -z-10 hidden w-[50vw] lg:block">
        <Image src={"/images/agro1.jpg"} alt="" fill={true}></Image>
      </div>
    </>
  );
}
