import { PublicKey } from '@solana/web3.js'

const wallet = '<WALLET_ADDRESS>'

try {
  const address = new PublicKey(wallet)

  if (PublicKey.isOnCurve(address.toBuffer())) {
    console.log(PublicKey.isOnCurve(address))
  } else {
    console.log(false)
  }
} catch (error) {
  console.log(false)
}
