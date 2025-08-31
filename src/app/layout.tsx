import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | SeedUp",
    default: "SeedUp",
  },
  description: "Scale and grow with us",
  icons: {
    icon: [
      { type: "image/png", sizes: "32x32", url: "/images/plant.svg" },
      { type: "image/svg", sizes: "16x16", url: "/images/plant.svg" },
    ],
    apple: { url: "/images/plant.svg", sizes: "180x180" },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#2E8B57" showSpinner={false} />

          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
