import { IWalletExtensionContent, IWalletId } from "./types";
import { ReactComponent as EnkryptSVG } from "@/public/enkrypt.svg";
import { ReactComponent as PolkadotSVG } from "@/public/polkadot.svg";
import { ReactComponent as SubWalletSVG } from "@/public/subwallet.svg";
import { ReactComponent as TalismanSVG } from "@/public/talisman.svg";

export const WALLET_ID_LOCAL_STORAGE_KEY = "wallet";

export const WALLET = {
      "polkadot-js": { name: "Polkadot JS", SVG: PolkadotSVG },
      "subwallet-js": { name: "SubWallet", SVG: SubWalletSVG },
      talisman: { name: "Talisman", SVG: TalismanSVG },
      enkrypt: { name: "Enkrypt", SVG: EnkryptSVG },
    };

export type Wallets = [IWalletId, IWalletExtensionContent][];

export const WALLETS = Object.entries(WALLET) as Wallets;
