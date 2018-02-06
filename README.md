# LAND CLI 

Small cli arround the LAND smart contract, using fixed Infura URL with common seeds, no ethereum node required.

## Install
`$ git clone git@github.com:jpzk/land.git` 

`$ cd land`

`$ npm install`

`$ truffle compile` 

## Owner Of Land

`$ node_modules/babel-cli/bin/babel-node.js -- bin/LANDRegistry.js ownerOfLand -x 13 -y 3`

`Land owner is 0xd1dd93a4ad3c7b03064474e67a03c52fe170cc69`

# LAND

Contracts for Decentraland's World.

## Overview

The LAND contract keeps a record of all the land parcels, who their owner is,
and what data is associated with them. The data associated can be an IPFS
identifier, an IPNS url, or a simple HTTPS endpoint with a land description
file.

## License

Code released under [the Apache v2.0 license](https://github.com/decentraland/land/blob/master/LICENSE).
