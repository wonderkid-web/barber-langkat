"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const raw = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await raw.json();

      return res;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <main>
      <Button className="m-2" onClick={async () => await signOut()}>signout</Button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
