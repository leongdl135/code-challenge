import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider('https://bsc-dataseed1.binance.org');

const swthTokenContrac = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

const addresses = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392',
];

async function retrieveHolders() {
  const swthToken = new ethers.Contract(swthTokenContrac, ['function balanceOf(address) view returns (uint256)'], provider);

  for (const address of addresses) {
    const balance = await swthToken.balanceOf(address);
    console.log(`${address} ${ethers.formatEther(balance)}`);
  }
}

retrieveHolders();
