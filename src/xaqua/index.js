const { formatUnits } = require('@ethersproject/units');
const { Multicaller } = require('@snapshot-labs/snapshot.js');

export const author = 'chisom-dickson';
export const version = '0.1.0';

export async function strategy(space, network, provider, addresses, options, snapshot) {
  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';

  const abi = [
    'function balanceOf(address) view returns (uint256)',
    'function usersAllocation(address) view returns (uint256)'
  ];

  const multicaller = new Multicaller(network, provider, abi);

  addresses.forEach((address) => {
    multicaller.call(vault1-${address}, options.vault1, 'balanceOf', [address]);
    multicaller.call(vault2-${address}, options.vault2, 'balanceOf', [address]);
    multicaller.call(treasury-${address}, options.treasury, 'usersAllocation', [address]);
  });

  const result = await multicaller.execute(blockTag);

  const scores = {};
  addresses.forEach((address) => {
    const vault1Bal = result[vault1-${address}] || 0;
    const vault2Bal = result[vault2-${address}] || 0;
    const treasuryBal = result[treasury-${address}] || 0;

    const total = vault1Bal.add(vault2Bal).add(treasuryBal);
    scores[address] = parseFloat(formatUnits(total, options.decimals));
  });

  return scores;
}
