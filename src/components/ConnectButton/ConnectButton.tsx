import React, { useContext } from "react";
import { WalletContext } from "../../context/Wallet.context";

const ConnectButton = () => {
  const { initWallet, isWalletConnected, currentWalletAddress, disconnect } =
    useContext(WalletContext);

  const handleConnection = () => {
    isWalletConnected ? disconnect() : initWallet();
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleConnection}
    >
      {isWalletConnected ? currentWalletAddress : "Button"}
    </button>
  );
};

export default ConnectButton;
