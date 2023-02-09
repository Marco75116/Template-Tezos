import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  disconnectWallet,
  isConnected,
  setProvider,
} from "../utils/taquito/taquito";

type WalletContextProps = {
  currentWalletAddress: string;
  initWallet: () => void;
  disconnect: () => void;
  isWalletConnected: boolean;
};

type WalletProviderProps = {
  children: ReactNode;
};

export const WalletContext = createContext({} as WalletContextProps);

const WalletProvider = ({ children }: WalletProviderProps) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  const initWallet = async () => {
    const wallet = await setProvider();
    const address = await wallet.getPKH();

    setIsWalletConnected(true);
    setCurrentWalletAddress(address);
  };

  useEffect(() => {
    isConnected().then((connected) => {
      if (connected) {
        initWallet();
      }
    });
  });

  const disconnect = async () => {
    await disconnectWallet();

    setIsWalletConnected(false);
    setCurrentWalletAddress("");
  };

  return (
    <WalletContext.Provider
      value={{
        isWalletConnected,
        currentWalletAddress,
        initWallet,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
