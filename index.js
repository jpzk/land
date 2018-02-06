import { default as LANDRegistryLib } from './lib/LANDRegistry'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'

var HDWalletProvider = require("truffle-hdwallet-provider");

const Contract = contract(require('./build/contracts/LANDRegistry.json'))

export default function (mnemonic, infuraURL, addressAt) {
  const provider = new HDWalletProvider(mnemonic, infuraURL, addressAt)
  return new LANDRegistryLib(Contract,provider)
}
