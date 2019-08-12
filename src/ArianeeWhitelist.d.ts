/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class ArianeeWhitelist extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    isBlacklisted(
      _owner: string,
      _sender: string,
      _tokenId: number | string
    ): TransactionObject<boolean>;

    isAuthorized(
      _tokenId: number | string,
      _sender: string,
      _tokenOwner: string
    ): TransactionObject<boolean>;

    isAble(
      _target: string,
      _ability: number | string
    ): TransactionObject<boolean>;

    isWhitelisted(
      _tokenId: number | string,
      _address: string
    ): TransactionObject<boolean>;

    assignAbilities(
      _target: string,
      _abilities: (number | string)[]
    ): TransactionObject<void>;

    addWhitelistedAddress(
      _tokenId: number | string,
      _address: string
    ): TransactionObject<void>;

    revokeAbilities(
      _target: string,
      _abilities: (number | string)[]
    ): TransactionObject<void>;

    addBlacklistedAddress(
      _sender: string,
      _tokenId: number | string,
      _activate: boolean
    ): TransactionObject<void>;
  };
  events: {
    WhitelistedAddressAdded(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    BlacklistedAddresAdded(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    AssignAbility(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    RevokeAbility(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    allEvents: (
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
