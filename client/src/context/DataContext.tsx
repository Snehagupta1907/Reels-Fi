"use client";
import React from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const DataContext = React.createContext();
const DataContextProvider = ({ children }) => {
  const config = new AptosConfig({ network: Network.DEVNET });
  const aptosClient = new Aptos(config);
  const { account, signAndSubmitTransaction } = useWallet();
  const MODULE_ADDRESS =
    "0x25e6d86a5a7083d9d61e40381e5238ab6d2e785825eba0183cebb6009483dab4";
  const getTokenMetadata = async (hostAddress:string) => {
    const functionType = "get_metadata";
    console.log("Getting token metadata for host address:", hostAddress);
    try {
      const transaction = {
        data: {
          function: `${MODULE_ADDRESS}::reels_fi::${functionType}`,
          functionType: "entry_function_payload",
          senderAddress: hostAddress,
          arguments: [],
        },
      };

      console.log("Transaction:", transaction);

      // Sign and submit transaction to chain
      const response = await signAndSubmitTransaction(transaction);

      // Wait for transaction to be mined
    //   await aptosClient.waitForTransaction({ transactionHash: response.hash });

     

      console.log("Set current time transaction successful",response);
    } catch (error) {
      console.error("Error setting current time:", error);
      throw error;
    }
  };


  return (
    <DataContext.Provider
      value={{
        getTokenMetadata
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => React.useContext(DataContext);
export default DataContextProvider;
