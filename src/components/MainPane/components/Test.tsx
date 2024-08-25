import { type FC } from "react";

import { Button,VStack } from "@chakra-ui/react";
import { useAccount } from "wagmi";

import { useTransfer, useBalanceOf } from "@/hooks/useERC20";

const Erc20: FC = () => {
  // const { hash, isPending, createEvent } = useCreateEvent();
  // const { data: event } = useEvents(0);
  const { address } = useAccount();
  
  const { data: balance } = useBalanceOf(address || '');
  // const { data: hash, writeContract } = useWriteContract()
  const { hash, transfer } = useTransfer()
  console.log("balance: " + balance);

  async function handleTransfer() { 
    transfer('0x8d3D6458a80669Eb74726B2EB23B9169083a51F1', 12);
  }

  return (
    <VStack w={"45%"} minWidth={"270px"} gap={2}>
      <p>{ "balance: " + balance }</p>
      <Button
        variant="ghost"
        onClick={handleTransfer}
        className="custom-button"
      >
        Transfer
      </Button>
      {hash ? hash : null}
    </VStack>
  );
};

export default Erc20;
