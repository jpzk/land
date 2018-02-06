const Web3 = require('web3')

export default class {
  constructor (Contract, provider) {
    this.Contract = Contract 
    this.Contract.setProvider(provider)

    this.registry = this.Contract.at("0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d")
  }

  ownerOfLand(x, y) {
    return this.registry.ownerOfLand.call(x,y)
  }
}


