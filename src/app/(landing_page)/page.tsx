"use client"

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

export default function Home() {

   const {data, isLoading} = useQuery({
    queryKey: ['test'],
    queryFn: async () =>{
      const raw = await fetch('https://jsonplaceholder.typicode.com/todos')
      const res = await raw.json()

      return res
    }
   })

   
  if(isLoading) return <h1>Loading...</h1>
  
  return (
    <main>
      <Button>Fetch</Button>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
