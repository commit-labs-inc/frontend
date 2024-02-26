"use client";

import { createContext, ReactNode, useContext } from 'react';
import {
  usePolkadotExtension,
  UsePolkadotExtensionReturnType,
} from '@/app/lib/hooks/use-polkadot-extension';

const PolkadotExtensionContext = createContext<UsePolkadotExtensionReturnType>({
  accounts: [],
  error: null,
  isGearReady: false,
  gearApi: null,
  isWalletReady: false,
  actingAccount: null,
  injector: null,
  setActingAccountIdx: () => {},
});

export const usePolkadotExtensionWithContext = () => useContext(PolkadotExtensionContext);

export const PolkadotExtensionContextProvider = ({ children }: { children: ReactNode }) => {
  const polkadotExtension = usePolkadotExtension();
  //Return the ContextProvider
  return (
    <PolkadotExtensionContext.Provider value={polkadotExtension}>
      {children}
    </PolkadotExtensionContext.Provider>
  );
};