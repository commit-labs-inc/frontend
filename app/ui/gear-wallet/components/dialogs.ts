import { WalletModalProps } from "@/app/ui/gear-wallet/wallet/wallet-modal/WalletModal";
import { ComponentType, lazy } from 'react';

export interface IDialogsLibrary {
  WalletModal: WalletModalProps;
}

export const DialogsLibrary: Record<keyof IDialogsLibrary, any> = {
  WalletModal: lazy<ComponentType<WalletModalProps>>(() =>
    import("@/app/ui/gear-wallet/wallet/wallet-modal/WalletModal").then(({ WalletModal }) => ({ default: WalletModal })),
  ),
};
