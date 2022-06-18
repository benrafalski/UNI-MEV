// import { BigNumber } from "ethers";

export class TokenBalances {
  [tokenAddress];
}

export class MultipleCallData {
  targets;
  data;
}

export class CallDetails {
  target;
  data;
  value;
}

export class EthMarket {
  get tokens() {
    return this._tokens;
  }

  get marketAddress(){
    return this._marketAddress;
  }

  get protocol(){
    return this._protocol;
  }

  _tokens;
  _marketAddress;
  _protocol;

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