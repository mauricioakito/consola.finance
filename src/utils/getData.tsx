import React from "react";
import * as solanaWeb3 from '@solana/web3.js';

interface signatureStatus {
  blockTime: number;
  confirmationStatus: string;
  err: null;
  memo: null;
  signature: string;
  slot: number;
}

export const getData = () => {

  const searchAddress = "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt";
  const endpoint =
    "https://serene-palpable-valley.solana-mainnet.discover.quiknode.pro/09f83a19be48bc04f7f7e45dba60fee9b9868a2d/";
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
