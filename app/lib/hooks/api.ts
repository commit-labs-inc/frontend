"use client";

import { useAlert, useSendMessage } from "@gear-js/react-hooks";
import { getStateMetadata, ProgramMetadata, StateMetadata } from "@gear-js/api";
import { HexString } from "@polkadot/util/types";
import { useEffect, useState } from "react";
import questMetaTxT from "./quest.meta.txt";

function useProgramMetadata(source: string) {
  const alert = useAlert();

  const [metadata, setMetadata] = useState<ProgramMetadata>();
  /*useEffect(() => {
    fetch(source)
      .then((response) => response.text())
      .then((meta) => ProgramMetadata.from(meta))
      .then((result) => setMetadata(result))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/
  useEffect(() => {
    setMetadata(ProgramMetadata.from(source));
  }, []);

  return metadata;
}

function useStateMetadata(source: string) {
  const alert = useAlert();

  const [stateMetadata, setStateMetadata] = useState<StateMetadata>();

  useEffect(() => {
    fetch(source)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => Buffer.from(arrayBuffer))
      .then((buffer) => getStateMetadata(buffer))
      .then((result) => setStateMetadata(result))
      .catch(({ message }: Error) => alert.error(message));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return stateMetadata;
}

function useQuestMetadata() {
  return useProgramMetadata(questMetaTxT);
}

function useSendQuestMessage() {
  const metadata = useQuestMetadata();
  console.log(metadata);
  return useSendMessage(
    "0xce4d174cfcad523d861923bd5b3bf8bf28579fb3aba8400ae1031553ceaaf90a",
    metadata,
    { isMaxGasLimit: true }
  );
}

export { useProgramMetadata, useStateMetadata, useSendQuestMessage };
