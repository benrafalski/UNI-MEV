import { BigNumber } from "ethers";

export interface TokenBalances {
  [tokenAddress: string]: BigNumber
}

export interface MultipleCallData {
  targets: Array<string>
  data: Array<string>
}

export interface CallDetails {
  target: string;
  data: string;
  value?: BigNumber;
}

export abstract class EthMarket {
  get tokens(): Array<string> {
    return this._tokens;
  }

  get marketAddress(){
    return this._marketAddress;
  }

  get protocol(){
    return this._protocol;
  }

  protected readonly _tokens;
  protected readonly _marketAddress;
  protected readonly _protocol;

  constructor(marketAddress, tokens, protocol) {
    this._marketAddress = marketAddress;
    this._tokens = tokens
    this._protocol = protocol;
  }


  getTokensOut(tokenIn, tokenOut, amountIn);

  getTokensIn(tokenIn, tokenOut, amountOut);

  sellTokensToNextMarket(tokenIn, amountIn, ethMarket)

  sellTokens(tokenIn, amountIn, recipient)

  receiveDirectly(tokenAddress);

  prepareReceive(tokenAddress, amountIn)
}