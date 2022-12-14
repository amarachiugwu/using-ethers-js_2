// require("@nomiclabs/hardhat-waffle");
import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config({ path: ".env" });

const ALCHEMY_RINKEBY_API_KEY_URL = process.env.ALCHEMY_RINKEBY_API_KEY_URL;

const ALCHEMY_GOERLI_API_KEY_URL = process.env.ALCHEMY_GOERLI_API_KEY_URL;

const INFURA_GOERLI_API_KEY_URL = process.env.INFURA_GOERLI_API_KEY_URL;


const INFURA_KOVAN_API_KEY_URL = process.env.INFURA_KOVAN_API_KEY_URL;

const INFURA_ROPSTEN_API_KEY_URL = process.env.INFURA_ROPSTEN_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY1 = process.env.ACCOUNT_PRIVATE_KEY1;

// const API_TOKEN = process.env.API_TOKEN;

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        // url : INFURA_ROPSTEN_API_KEY_URL,
        url: "https://mainnet.infura.io/v3/e92c38757159497d97aad034c8e59232",
        // blockGasLimit: 200000000000,
        // gasPrice: 10000000000,
      }
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY1],
    },
    ropsten: {
      url: INFURA_ROPSTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY1],
    },
    goerli: {
      url: INFURA_GOERLI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY1],
    },
    kovan: {
      url: INFURA_KOVAN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY1],
    },
    // mainnet: {
    //   url: ALCHEMY_MAINNET_API_KEY_URL,
    //   accounts: [ACCOUNT_PRIVATE_KEY],
    // },
    // mumbai: {
    //   url: ALCHEMY_MUMBAI_API_KEY_URL,
    //   accounts: [ACCOUNT_PRIVATE_KEY],
    // }
  },
  // etherscan: {
  //   apiKey: API_TOKEN
  // }
};