"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <h1>LANDING PAGE</h1>
        {children}
        </SessionProvider>
    </QueryClientProvider>
  );
}

export default Wrapper;
