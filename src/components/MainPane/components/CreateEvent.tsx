// src/components/ContractInteraction.tsx
import React, { useEffect, useState } from 'react';

import { useContract, useSigner } from 'wagmi';

import { MyContract__factory } from '../typechain';

const ContractInteraction: React.FC = () => {
  const [contract, setContract] = useState<ReturnType<typeof MyContract__factory.connect> | null>(null);
  const { data: signer } = useSigner();

  useEffect(() => {
    if (signer) {
      // Replace 'YOUR_CONTRACT_ADDRESS' with your actual contract address
      const contractInstance = MyContract__factory.connect('YOUR_CONTRACT_ADDRESS', signer);
      setContract(contractInstance);
    }
  }, [signer]);

  const callContractFunction = async () => {
    if (contract) {
      const result = await contract.myFunction();
      console.log('Result from contract:', result);
    }
  };

  return (
    <div>
      <button onClick={callContractFunction}>Call Contract Function</button>
    </div>
  );
};

export default ContractInteraction;
