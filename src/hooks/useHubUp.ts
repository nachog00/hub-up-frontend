import {
  useReadContract,
  useWriteContract
} from 'wagmi';

import { HubUp_Abi } from '@/abi/HubUp';

const hubUpConfig = {
  address: '0x389F07fb896a487d042378485c50270D2d793b1E',
  abi: HubUp_Abi.abi
} as any

export const useCreateEvent = () => {
  const {
    data: hash, 
    isPending, 
    writeContract
  } = useWriteContract()

  function createEvent({
    startTime,
    endTime,
    price,
    stakeAmount,
    minParticipants,
    maxParticipants
  } : {
    startTime: number,
    endTime: number,
    price: number,
    stakeAmount: number,
    minParticipants: number,
    maxParticipants: number
  }) {
    console.log("here")
    return writeContract({
      address: '0x389F07fb896a487d042378485c50270D2d793b1E',
      abi: HubUp_Abi.abi,
      functionName: 'createEvent',
      args: [
        startTime,
        endTime,
        price,
        stakeAmount,
        minParticipants,
        maxParticipants
      ]
    });
  }

  return {
    hash,
    isPending,
    createEvent,
  }
}

export const useJoinEvent = () => {
  const {
    data: hash, 
    isPending, 
    writeContract
  } = useWriteContract()

  function joinEvent() {
    console.log("here")
    return writeContract({
      address: '0x389F07fb896a487d042378485c50270D2d793b1E',
      abi: HubUp_Abi.abi,
      functionName: 'joinEvent',
      args: [0]
    });
  }

  return {
    hash,
    isPending,
    joinEvent,
  }
}


export const useEvents = (id: number) => {
    return useReadContract({
      ...hubUpConfig,
      functionName: 'events',
      args: [id],
    });
}

export const useTotalEvents = () => {
  return useReadContract({
    ...hubUpConfig,
    functionName: 'nextEventId',
  });
}