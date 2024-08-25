import { type FC } from "react";

import { Button,VStack } from "@chakra-ui/react";
// import { useWriteContract } from 'wagmi'

import { useJoinEvent, useTotalEvents } from "@/hooks/useHubUp";

const HubUp: FC = () => {
  // const { hash, isPending, createEvent } = useCreateEvent();
  // const { data: event } = useEvents(0);
  const { data: totalEvents } = useTotalEvents();
  // const { data: hash, writeContract } = useWriteContract()
  const { hash, joinEvent } = useJoinEvent()
  console.log("totalEvents: " + totalEvents);

  async function handleCreateEvent() { 
    joinEvent();
  } 

  return (
    <VStack w={"45%"} minWidth={"270px"} gap={2}>
      <p>{ "totalEvents: " + totalEvents }</p>
      <Button
        variant="ghost"
        onClick={handleCreateEvent}
        className="custom-button"
      >
        Create Event
      </Button>
      {hash ? hash : null}
    </VStack>
  );
};

export default HubUp;
