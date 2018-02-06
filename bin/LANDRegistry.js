#!/usr/bin/env node
import { default as yargs } from 'yargs'
import { default as initializeLib } from '../index'

var args = yargs
  .command('ownerOfLand', 'Retrieves the owner of a land', (yargs) => {
    return yargs.option('infura', {
      description: 'Infura URL',
      alias: 'h',
    })
    .option('x', {
      description: 'X coordinate',
      type: 'int'
    })
    .option('y', {
      description: 'Y coordinate',
      type: 'int'
    })
    .demand(['x', 'y'])
  })
  .help()
.usage('Usage: $0 [command] [options]')

let { argv } = args

if (argv._.length === 0) {
  args.showHelp()
}

let command = argv._[0]

var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";
var infura = "https://mainnet.infura.io/MaaVBVQmkcdH9PUQMSp7"

if (command === 'ownerOfLand') {
  let { x, y} = argv
  let lib = initializeLib(mnemonic, infura, 0)
  lib.ownerOfLand(x,y).then(function(res) {
    console.log("Land owner is", res)
  })
}
