import { useState } from 'react';
import { useAccount } from '@gear-js/react-hooks';
import { Button } from "@/app/ui/gear-wallet/components/button/button";
import { DialogsLibrary } from "@/app/ui/gear-wallet/components/dialogs";
import clsx from 'clsx';
import type { BaseComponentProps } from "@/app/types";
import styles from './Wallet.module.scss';
import { WalletIcon } from "@/app/ui/gear-wallet/wallet/wallet-icon/wallet-icon";

export function Wallet({ className }: BaseComponentProps) {
  const [open, setOpen] = useState(false);

  const { account } = useAccount();

  const isSigned = !!account;

  return (
    <>
      <div className={clsx(styles.wrapper, className)}>
        <Button
          variant={isSigned ? 'black' : 'primary'}
          className={clsx(styles.button, className)}
          onClick={() => setOpen(true)}
        >
          {isSigned && (
            <WalletIcon
              address={account.decodedAddress}
              size={16}
              className={styles.icon}
            />
          )}
          <span>{isSigned ? account.decodedAddress : 'Connect Wallet'}</span>
        </Button>
      </div>

      <DialogsLibrary.WalletModal open={open} setOpen={setOpen} />
    </>
  );
}
