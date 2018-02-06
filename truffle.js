require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/MaaVBVQmkcdH9PUQMSp7")
      },
      network_id: 3
    },
    livenet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/MaaVBVQmkcdH9PUQMSp7")
      },
      network_id: 1
    }   
  }
};
