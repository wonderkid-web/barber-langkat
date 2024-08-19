"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Navigation from "../menu/Navigation";

type Props = {
  children: React.ReactNode;
};

function WrapperAdmin({ children }: Props) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <div className="bg-primary min-h-screen max-h-screen overflow-hidden">
          {children}

          <Navigation />
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default WrapperAdmin;
