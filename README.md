# Ethereum Coffee Supply Chain DAPP

## Address on Rinkeby
**Transaction ID** : 0x856f77562c2d9d5de5dcb95eec1e938e6dd01f5982e9be4389a0c296077a0dca
**Contract address** : https://rinkeby.etherscan.io/address/0x4f9f2d53935f4d6320943787832bc299b98c003f

## Development Environment Version
* **Node version number** :  v8.9.4
* **Truffle version number** : v5.1.18 (core: 5.1.18)
* **Web3 version number** : v1.2.1
* **Solidity version** : v0.5.16 (solc-js)

## Project Deployment Procedure

* Launch Ganache GUI
* Run the following command to test smart contracts
  * truffle compile
  * truffle migrate --reset
  * truffle test
  * Run local server with the following command:
  * npm run dev
* Test DApp in browserhttp://localhost:3000/

**For Rinkeby network

* Create a .env file in the root directory. Add environment-specific variables on new lines in the form of NAME=VALUE
* WALLET_MNEMONIC='Your Mnemonic goes here'
* WEB3_PROVIDER='Your Infura Endpoint goes here'
* Run the following command to test smart contracts
  * truffle compile
  * truffle migrate --reset --network rinkeby
  * truffle test
* Run local server with the following command:
  * npm run dev
  * Test DApp in browserhttp://localhost:3000/

Notes: In order to test this DApp in browser, you need MetaMask installed
