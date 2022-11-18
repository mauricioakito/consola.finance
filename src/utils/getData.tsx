import React from "react";
import * as solanaWeb3 from '@solana/web3.js';
import { ADDRESS, ENDPOINT } from "./Constraints";

export const GetData = () => {

  const searchAddress = ADDRESS;
  const endpoint = ENDPOINT;
  const solanaConnection = new solanaWeb3.Connection(endpoint);

  const getTransactions = async (address: string, numTx: number) => {
    const pubKey = new solanaWeb3.PublicKey(address);

    let response = [];

    let transactionList = await solanaConnection.getSignaturesForAddress(
      pubKey,
      { limit: numTx }
    )

    let signatureList = transactionList.map(
      (transaction) => transaction.signature
    );

    let transactionDetails = await solanaConnection.getParsedTransactions(
      signatureList,
      { maxSupportedTransactionVersion: 0 }
    );

    response = [...transactionList]

    return response;

  };

  return Promise.resolve(getTransactions(searchAddress, 6))
};
