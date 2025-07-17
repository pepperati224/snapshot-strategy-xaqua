import { getScoresDirect } from '../src/utils';
import strategies from '../src/strategies';
import addresses from './addresses.json';

const strategy = {
  name: 'snapshot-strategy-xaqua',
  params: {
    vaults: [
      '0x8f0d1a8d2f2f0d9b297e6d4d7cd234ab638df51f',
      '0x589fad2960b93efdfc0f86fcb5606cf625d8f755'
    ],
    treasury: {
      address: '0x46b6d5732d1b86f4fac7572efb675afbaba8164b',
      method: 'usersAllocation'
    },
    symbol: 'XAQUA',
    decimals: 18
  }
};

(async () => {
  const scores = await getScoresDirect('my-space.eth', '1', 'latest', [strategy], addresses);
  console.log(scores);
})();
