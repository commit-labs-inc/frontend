import {
  useAlert,
  useSendMessage,
  useReadWasmState,
  useReadFullState,
} from "@gear-js/react-hooks";
import { getStateMetadata, ProgramMetadata, StateMetadata } from "@gear-js/api";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import questMetaTxT from "./quest.meta.txt";
import reputationMetaTxT from "./reputation.meta.txt";
import questMetaWasm from "./quest.meta.wasm";

const quest_contract_id =
  "0xf4cacc9d7a4ccee8fef8c8d2cd342bc2d652797aba193900707a12cb79fb8cfe";

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

function useProgramState<T>(functionName: string, payload?: any) {
  const { buffer } = useWasmMetadata(questMetaWasm);
  const meta = useProgramMetadata(questMetaTxT);

  return useReadWasmState<T>({
    programId: quest_contract_id,
    wasm: buffer,
    programMetadata: meta,
    functionName,
    payload,
  });
}

function useWasmMetadata(source: RequestInfo | URL) {
  const [data, setData] = useState<Buffer>();

  useEffect(() => {
    if (source) {
      fetch(source)
        .then((response) => response.arrayBuffer())
        .then((array) => Buffer.from(array))
        .then((buffer) => setData(buffer))
        .catch(({ message }: Error) =>
          console.error(`Fetch error: ${message}`)
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return { buffer: data };
}

interface QuestData {
  base: {
    institutionName: string;
    questName: string;
    description: string;
    deliverables: string;
    capacity: string;
    skillTokenName: string;
    deadline: string;
    openTry: boolean;
    provider: string;
    providerName: string;
    contactInfo: string;
    submissions: Record<string, unknown>; // Assuming this is an object with unknown structure
    gradings: Record<string, unknown>; // Assuming this is an object with unknown structure
    modified: boolean;
  };
  freeGradings: string;
  hiringFor: string;
  skillTags: string;
  reputationNft: string;
}

function readFullState() {
  const metadata = useProgramMetadata(questMetaTxT);
  const payload = "1709350233000";

  const { state } = useReadFullState(quest_contract_id, metadata, payload);

  return state;
}

function firstState() {
  const payload = "1709350233000";
  return useProgramState<QuestData>("get_quest_by_id", payload);
}

function useQuestMetadata() {
  return useProgramMetadata(questMetaTxT);
}

function useReputationMetadata() {
  return useProgramMetadata(reputationMetaTxT);
}

function useSendQuestMessage() {
  const metadata = useQuestMetadata();

  return useSendMessage(quest_contract_id, metadata, { isMaxGasLimit: true });
}

function useSendReputationMessage() {
  const metadata = useReputationMetadata();
  const reputation_contract_id =
    "0x9a5e6fb26b02b491532d312517b95aef8b03ee52c20aa3742ca2330ce4e769b7";

  return useSendMessage(reputation_contract_id, metadata, {
    isMaxGasLimit: true,
  });
}

export {
  useProgramMetadata,
  useStateMetadata,
  useSendQuestMessage,
  useSendReputationMessage,
};
