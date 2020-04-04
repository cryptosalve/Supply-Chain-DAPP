const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "db01afc8028b4c7eaea2841fbe70edfc";
const mnemonic = "frog turtle dice list winter sausage moral fortune tunnel joy open person";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000
    },
  }
};