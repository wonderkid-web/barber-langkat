"use client"

import { SigninCard } from "@/component/signin/SigninCard";
import { cn } from "@/lib/utils";
import { LOGO_URL } from "@/static";
import Image from "next/image";
import Link from "next/link";

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}

export default function Home() {

  
  return (
    <main className="flex flex-col gap-2 justify-center px-4 py-2">
      <Image src={LOGO_URL} alt="logo" width={500} height={500} priority />
      <Container>
        <SigninCard />
      </Container>
      <span className="text-center mt-3">
      Tidak punya akun?{"->"}
      <Link className="text-blue-500" href={'/auth/signup'}>Daftar Disini</Link>
      </span>
    </main>
  );
}
