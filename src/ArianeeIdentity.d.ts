/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractOptions, Options } from "web3-eth-contract";
import { Block } from "web3-eth";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { Callback, TransactionObject } from "./types";

export class ArianeeIdentity extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  methods: {
    waitingURI(_identity: string): TransactionObject<string>;

    compromiseIdentityDate(_identity: string): TransactionObject<string>;

    waitingImprint(_identity: string): TransactionObject<string>;

    addressFromId(_id: string | number[]): TransactionObject<string>;

    addressURI(_identity: string): TransactionObject<string>;

    addressImprint(_identity: string): TransactionObject<string>;

    addressIsApproved(_identity: string): TransactionObject<boolean>;

    updateValidatorAddress(
      _newValidatorAddress: string
    ): TransactionObject<void>;

    updateBouncerAddress(_newBouncerAddress: string): TransactionObject<void>;

    removeAddressFromApprovedList(_identity: string): TransactionObject<void>;

    validateInformation(
      _identity: string,
      _uriToValidate: string,
      _imprintToValidate: string | number[]
    ): TransactionObject<void>;

    updateCompromiseDate(
      _identity: string,
      _compromiseDate: number | string
    ): TransactionObject<void>;

    updateInformations(
      _uri: string,
      _imprint: string | number[]
    ): TransactionObject<void>;

    addAddressToApprovedList(_newIdentity: string): TransactionObject<string>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    owner(): TransactionObject<string>;
  };
  events: {
    AddressApprovedAdded(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    AddressApprovedRemoved(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    URIUpdated(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    URIValidate(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    IdentityCompromised(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    SetAddress(
      options?: {
        filter?: object;
        fromBlock?: number | string;
        topics?: (null | string)[];
      },
      cb?: Callback<EventLog>
    ): EventEmitter;

    OwnershipTransferred(
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
