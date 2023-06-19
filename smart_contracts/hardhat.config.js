require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/mPCa-Sy_-ed8J-5E0vIE8__87glHvwss',
      accounts: ['31b5bd603eb1ef65acb67a3d814e26b6ee49317a3e3a1bf591029cde8b5935d4']
    }
  }
}