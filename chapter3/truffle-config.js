// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      from: "0x1b0fF63bF2BeA0bB2f1aDdC5714C9A428B946D16",
      gas: 6700000,
      network_id: '*' // Match any network id
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      gas: 4700000,
      network_id: '3' // Match any network id
    },
    kovan: {
      host: 'localhost',
      port: 8545,
      gas: 4700000,
      network_id: '5' // Match any network id
    }
  }
}
