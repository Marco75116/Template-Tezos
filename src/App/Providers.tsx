import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WalletProvider from "../context/Wallet.context";
import MainProvider from "../context/Main.context";

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <WalletProvider>{children}</WalletProvider>
      </MainProvider>
    </QueryClientProvider>
  );
};

export default Providers;
