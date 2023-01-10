//https://eth-goerli.g.alchemy.com/v2/voSots_45fauSJjUnZ10usqv7fuPmUfd

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/voSots_45fauSJjUnZ10usqv7fuPmUfd",
      accounts: [
        "9da82448a73b40448f6225f4c7fb05c16b444a576a0dd20d5be350e43c4d1b44",
      ],
    },
  },
};
