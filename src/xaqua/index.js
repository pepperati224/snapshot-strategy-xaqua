const { formatUnits } = require('@ethersproject/units');
const { BigNumber } = require('@ethersproject/bignumber');
const { Multicaller } = require('@snapshot-labs/snapshot.js');

export const author = 'chisom-dickson';
export const version = '0.1.0';
export const key = 'xaqua';
export const title = 'XAQUA Voting Power';
export const description = 'Strategy to sum balances from Vault1, Vault2, and Treasury for XAQUA voting power.';

export async function strategy(space, network, provider, addresses, options, snapshot) {
  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';

  const abi = [
    'function balanceOf(address) view returns (uint256)',
    'function usersAllocation(address) view returns (uint256)'
  ];

  const multicaller = new Multicaller(network, provider, abi, { blockTag });

  addresses.forEach((address) => {
    multicaller.call(vault1-${address}, options.vault1, 'balanceOf', [address]);
    multicaller.call(vault2-${address}, options.vault2, 'balanceOf', [address]);
    multicaller.call(treasury-${address}, options.treasury, 'usersAllocation', [address]);
  });

  const result = await multicaller.execute();

  const scores = {};
  addresses.forEach((address) => {
    const vault1Bal = BigNumber.from(result[vault1-${address}] || 0);
    const vault2Bal = BigNumber.from(result[vault2-${address}] || 0);
    const treasuryBal = BigNumber.from(result[treasury-${address}] || 0);
    const total = vault1Bal.add(vault2Bal).add(treasuryBal);

    scores[address] = parseFloat(formatUnits(total, options.decimals));
  });

  return scores;
}
