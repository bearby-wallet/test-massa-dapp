import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useBearby } from '@hicaru/bearby-react';
import { web3 } from '@hicaru/bearby.js';

import {
  Address,
  changeCallStack,
  resetStorage,
  setDeployContext,
} from '@massalabs/massa-as-sdk';
import {
  Args,
  stringToBytes,
  u8toByte,
  bytesToU256,
  u256ToBytes,
} from '@massalabs/as-types';
import {
  transfer,
  balanceOf,
  totalSupply,
  name,
  symbol,
  decimals,
  version,
  transferFrom,
  allowance,
  increaseAllowance,
  decreaseAllowance,
  constructor,
  VERSION,
} from '../../massa-standards/smart-contracts/assembly/contracts/FT/token';
import { u256 } from 'as-bignum/assembly';

function App() {
  const { connected, enabled, wallet, massa, contract, base58, net, period } = useBearby();

  React.useEffect(() => {
    console.log("works");

  }, []);

  const deploy = React.useCallback(() => {
    const TOKEN_NAME = 'TOKEN_NAME';
    const TOKEN_SYMBOL = 'TKN';
    const DECIMALS: u8 = 8;
    const TOTAL_SUPPLY = new u256(100, 100, 100, 100);

    constructor(
      new Args()
        .add(TOKEN_NAME)
        .add(TOKEN_SYMBOL)
        .add(DECIMALS)
        .add(TOTAL_SUPPLY)
        .serialize(),
    );
  }, []);

  return (
    <div>
      <p>
        connected:({connected})
      </p>
      <p>
        period:({period})
      </p>
      <p>
        enabled:({enabled})
      </p>
      <p>
        base58:({base58})
      </p>
      <p>
        network:({net})
      </p>
      <button onClick={() => wallet.connect()}>
        connect
      </button>
      <button onClick={() => deploy()}>
        deploy FT
      </button>
    </div>
  );
}

export default App;
