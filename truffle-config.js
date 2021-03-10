module.exports = {
  compilers: {
    solc: {
      version: "0.6.10",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium" // Current EVM on ThunderCore is fixed to "byzantium"
      }
    }
  },
  networks: {
  }
}
