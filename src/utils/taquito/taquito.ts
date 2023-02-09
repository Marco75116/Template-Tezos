import { BeaconWallet } from "@taquito/beacon-wallet";
import { TezosToolkit } from "@taquito/taquito";

export const tezos = new TezosToolkit(
  process.env.REACT_APP_RPC_ADDRESS as string
);

const options = {
  name: "Boilerplate",
  preferredNetwork: process.env.REACT_APP_NETWORK as string,
};

const network = {
  type: process.env.REACT_APP_NETWORK as string,
  name: "Boilerplate",
  rpcUrl: process.env.REACT_APP_RPC_ADDRESS as string,
};

// @ts-ignore
export const wallet = new BeaconWallet(options);

export const setProvider = async () => {
  const activeAccount = await wallet.client.getActiveAccount();

  if (activeAccount) {
    tezos.setProvider({ wallet });
    return wallet;
  }
  // @ts-ignore
  await wallet.requestPermissions({ network });
  tezos.setProvider({ wallet });
  return wallet;
};

export const isConnected = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    tezos.setProvider({ wallet });
    return wallet;
  }
  return false;
};

export const disconnectWallet = async () => {
  // @ts-ignore
  try {
    await wallet.clearActiveAccount();
    tezos.setWalletProvider(wallet);
    return true;
  } catch (error) {
    throw new Error("Error : " + error);
  }
};
