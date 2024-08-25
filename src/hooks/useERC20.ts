import {
  useReadContract,
  useWriteContract
} from 'wagmi';

import { ERC20_Abi } from '@/abi/ERC20';

const erc20Config = {
  address: '0x389F07fb896a487d042378485c50270D2d793b1E',
  abi: ERC20_Abi.abi
} as any

export const useTransfer = () => {
  const {
    data: hash, 
    isPending, 
    writeContract
  } = useWriteContract()

  function transfer(recipient: string, amount: number) {
    return writeContract({
      ...erc20Config,
      functionName: 'transfer',
      args: [recipient, amount]
    });
  }

  return {
    hash,
    isPending,
    transfer,
  }
}


export const useBalanceOf = (address: string) => {
    return useReadContract({
      ...erc20Config,
      functionName: 'balanceOf',
      args: [address],
    });
}
