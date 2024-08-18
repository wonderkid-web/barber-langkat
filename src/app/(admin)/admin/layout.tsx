import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css"
import WrapperAdmin from "@/component/wrapper/WrapperAdmin";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BARBER LANGKAT",
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
        <WrapperAdmin>{children}</WrapperAdmin>
      </body>
    </html>
  );
}
