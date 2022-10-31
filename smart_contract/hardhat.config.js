//https://eth-goerli.g.alchemy.com/v2/ZJc0IpwyamMJ20ek0enVMs5YYJSdPPJO


require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ZJc0IpwyamMJ20ek0enVMs5YYJSdPPJO",
      accounts: [
        "33c86ad42b8615f8c2b5f11318e2d8ff1128a07868e953da0e1905d3c5a466d6"
      ]
    },
  },
};
