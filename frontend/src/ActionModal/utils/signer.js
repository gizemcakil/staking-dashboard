import { signWithExtension } from "src/scripts/extension-utils"

export async function getSigner(
  config,
  submitType = "",
  { address, password },
) {
  if (submitType === `local`) {
    const { signWithPrivateKey, getStoredWallet } = await import(
      "@lunie/cosmos-keys"
    )

    const wallet = getStoredWallet(address, password)
    return signMessage => {
      const signature = signWithPrivateKey(
        signMessage,
        Buffer.from(wallet.privateKey, "hex")
      )

      return {
        signature,
        publicKey: Buffer.from(wallet.publicKey, "hex")
      }
    }
  } else if (submitType === `extension`) {
    return async signMessage => {
      return await signWithExtension(signMessage, address)
    }
  }
}
