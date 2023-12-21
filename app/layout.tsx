import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/lib/providers";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Survaii Todo",
  description: "Survaii TodoList App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="w-full">
            <div className="mx-auto max-w-xl w-full p-4 space-y-4">
              <div className="flex items-center justify-center">
                <Image
                  className="w-20 rounded-full"
                  src="/logo.jpg"
                  alt="Logo"
                  width={305}
                  height={305}
                />
              </div>
              <div className="w-full space-y-6">{children}</div>
            </div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
