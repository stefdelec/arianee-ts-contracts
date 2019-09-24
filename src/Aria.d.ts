/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import Contract, { contractOptions } from "web3/eth/contract";
import { EventLog, Callback, EventEmitter } from "web3/types";
import { TransactionObject, BlockType } from "web3/eth/types";
import { ContractEvent } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class Aria extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): Aria;
  methods: {
    supportsInterface(
      _interfaceID: string | number[]
    ): TransactionObject<boolean>;

    balanceOf(_owner: string): TransactionObject<BN>;

    allowance(_owner: string, _spender: string): TransactionObject<BN>;

    approve(
      _spender: string,
      _value: number | string
    ): TransactionObject<boolean>;

    transferFrom(
      _from: string,
      _to: string,
      _value: number | string
    ): TransactionObject<boolean>;

    transfer(_to: string, _value: number | string): TransactionObject<boolean>;

    name(): TransactionObject<string>;
    totalSupply(): TransactionObject<BN>;
    decimals(): TransactionObject<BN>;
    symbol(): TransactionObject<string>;
  };
  events: {
    Transfer: ContractEvent<{
      _from: string;
      _to: string;
      _value: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    Approval: ContractEvent<{
      _owner: string;
      _spender: string;
      _value: BN;
      0: string;
      1: string;
      2: BN;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
