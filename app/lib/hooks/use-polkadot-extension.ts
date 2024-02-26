import {
  InjectedAccountWithMeta,
  InjectedExtension,
} from "@polkadot/extension-inject/types";
import { useEffect, useState } from "react";
import { documentReadyPromise } from "@/app/lib/utils";
import { GearApi, VaraApiV1010 } from "@gear-js/api";

export interface UsePolkadotExtensionReturnType {
  isWalletReady: boolean;
  isGearReady: boolean;
  gearApi: GearApi | null;
  accounts: InjectedAccountWithMeta[] | null;
  error: Error | null;
  injector: InjectedExtension | null;
  actingAccount: InjectedAccountWithMeta | null;
  setActingAccountIdx: (idx: number) => void;
}

export const usePolkadotExtension = (): UsePolkadotExtensionReturnType => {
  const [isWalletReady, setIsWalletReady] = useState(false);
  const [isGearReady, setIsGearReady] = useState(false);
  const [gearApi, setGearApi] = useState<GearApi | null>(null);
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[] | null>(
    null
  );
  const [extensions, setExtensions] = useState<InjectedExtension[] | null>(
    null
  );
  const [actingAccountIdx, setActingAccountIdx] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);
  const [injector, setInjector] = useState<InjectedExtension | null>(null);

  const actingAccount = accounts && accounts[actingAccountIdx];

  useEffect(() => {
    // This effect is used to setup the browser extension
    const extensionSetup = async () => {
      const extensionDapp = await import("@polkadot/extension-dapp");
      const { web3AccountsSubscribe, web3Enable } = extensionDapp;

      const injectedPromise = documentReadyPromise(() =>
        web3Enable("Gear Demo")
      );
      const extensions = await injectedPromise;

      setExtensions(extensions);

      if (extensions.length === 0) {
        return;
      }

      if (accounts) {
        setIsWalletReady(true);
      } else {
        let unsubscribe: () => void;

        // we subscribe to any account change
        // note that `web3AccountsSubscribe` returns the function to unsubscribe
        unsubscribe = await web3AccountsSubscribe((injectedAccounts) => {
          setAccounts(injectedAccounts);
        });

        return () => unsubscribe && unsubscribe();
      }
    };

    if (!isWalletReady) {
      extensionSetup();
    }
  }, [extensions, accounts, isWalletReady]);

  useEffect(() => {
    // This effect is used to get the injector from the selected account
    // and is triggered when the accounts or the actingAccountIdx change
    const getInjector = async () => {
      const { web3FromSource } = await import("@polkadot/extension-dapp");
      const actingAccount =
        accounts && actingAccountIdx !== undefined
          ? accounts[actingAccountIdx]
          : undefined;
      if (actingAccount?.meta.source) {
        try {
          const injector = await web3FromSource(actingAccount?.meta.source);
          setInjector(injector);
        } catch (e: any) {
          setError(e);
        }
      }
    };

    getInjector();
  }, [actingAccountIdx, accounts]);

  useEffect(() => {
    // This effect is used to get the gearApi
    const getGearApi = async () => {
      const gearApi = await VaraApiV1010.create({
        providerAddress: "wss://testnet.vara.network",
      });
      if (gearApi) {
        setGearApi(gearApi);
        setIsGearReady(true);
      }
    };

    getGearApi();
  }, []);

  return {
    accounts,
    actingAccount,
    setActingAccountIdx,
    isWalletReady,
    isGearReady,
    gearApi,
    error,
    injector,
  };
};
