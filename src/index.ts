import { PublicKey } from '@solana/web3.js'

const wallet = '<WALLET_ADDRESS>'

try {
  const address = new PublicKey(wallet)

  if (PublicKey.isOnCurve(address.toBuffer())) {
    console.log('Valid Solana Address')
  } else {
    throw new Error('Invalid Solana Address')
  }
} catch (error) {
  console.log('Invalid Solana Address')
}
