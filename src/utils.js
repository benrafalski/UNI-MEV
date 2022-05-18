import { BigNumber, Wallet } from "ethers";

export const ETHER = BigNumber.from(10).pow(18);

export function bigNumberToDecimal(value, base = 18) {
  const divisor = BigNumber.from(10).pow(base)
  return value.mul(10000).div(divisor).toNumber() / 10000
}

export function getDefaultRelaySigningKey(){
  console.warn("You have not specified an explicity FLASHBOTS_RELAY_SIGNING_KEY environment variable. Creating random signing key, this searcher will not be building a reputation for next run")
  return Wallet.createRandom().privateKey;
}