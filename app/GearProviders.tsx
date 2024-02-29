"use client";

import {
  ApiProvider as GearApiProvider,
  AccountProvider,
  AlertProvider as GearAlertProvider,
} from "@gear-js/react-hooks";
import { Alert, alertStyles } from "@gear-js/ui";

export function GearProviders({ children }: { children: React.ReactNode }) {
  return (
    <GearApiProvider providerAddress="wss://testnet.vara.network">
      <AccountProvider>
        <GearAlertProvider
          template={Alert}
          containerClassName={alertStyles.root}
        >
          {children}
        </GearAlertProvider>
      </AccountProvider>
    </GearApiProvider>
  );
}
