// test.js
const { JsonRpcProvider } = require('@ethersproject/providers');
const strategy = require('./index');

(async () => {
  const provider = new JsonRpcProvider('https://rpc.sonic.fantom.network'); // Update if using custom RPC

  const result = await strategy.strategy(
    'your-space.eth',               // space
    '250',                          // network (use chain ID)
    provider,                       // ethers provider
    [
0x763da523d6141ebd74cc878a496b8b874bdf21d1
    ],                              // addresses to test
    {
      vault1: '0x8f0d1a8d2f2f0d9b297e6d4d7cd234ab638df51f',
      vault2: '0x589fad2960b93efdfc0f86fcb5606cf625d8f755',
      treasury: '0x46b6d5732d1b86f4fac7572efb675afbaba8164b',
      decimals: 18
    },                              // options
    'latest'                        // snapshot block
  );

  console.log(result);
})();
