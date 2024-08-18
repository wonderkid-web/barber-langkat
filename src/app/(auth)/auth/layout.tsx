import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css"
import WrapperAuth from "@/component/wrapper/WrapperAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Signin - BARBER LANGKAT",
  description: "Website Barber Langkat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <WrapperAuth>{children}</WrapperAuth>
      </body>
    </html>
  );
}
