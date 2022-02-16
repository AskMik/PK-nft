/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {

   //for kovan testnet

   /*solidity: "0.8.4",
   defaultNetwork: "kovan",
   networks: {
      hardhat: {},
      kovan: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },*/

      //for polygon
   
      defaultNetwork: "matic",
      networks: {
        hardhat: {
        },
        matic: {
          //url: "https://rpc-mumbai.maticvigil.com",
          url: API_URL,
          accounts: [`0x${PRIVATE_KEY}`]
        }
      },
      solidity: {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
      },
      mocha: {
        timeout: 20000
      }
    }

