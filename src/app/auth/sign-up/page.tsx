import Signup from "@/components/Auth/Signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpPage() {
  return (
    <>
      <div className="w-full lg:w-1/2">
        <div className="w-full p-4 sm:p-12.5 lg:p-6 xl:p-15">
          <h2 className="mb-10 text-3xl font-bold text-black dark:text-white">
            Sign up
          </h2>
          <Signup />
        </div>
      </div>

      <div className="bg-agro1 hidden w-full p-7.5 lg:block lg:w-1/2">
        <div className="custom-gradient-1 fx h-[90vh] flex-col overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:bg-dark-2/45 dark:bg-none">
          <h1 className="mb-4 text-2xl font-bold text-white dark:text-white sm:text-heading-3">
            Hi there!
          </h1>

          <p className="w-full max-w-[375px] text-center text-white dark:text-dark-6">
            Sign up to access your user dashboard and start growing
          </p>
        </div>
      </div>
    </>
  );
}
