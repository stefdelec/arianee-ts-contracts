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

export class ArianeeEvent extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: contractOptions
  );
  clone(): ArianeeEvent;
  methods: {
    idToPendingEvents(arg0: number | string): TransactionObject<BN>;

    tokenEventsList(
      arg0: number | string,
      arg1: number | string
    ): TransactionObject<BN>;

    pendingEventsLength(_tokenId: number | string): TransactionObject<BN>;

    getEvent(
      _eventId: number | string
    ): TransactionObject<{
      0: string;
      1: string;
      2: string;
      3: BN;
    }>;

    eventsLength(_tokenId: number | string): TransactionObject<BN>;

    eventIdToToken(arg0: number | string): TransactionObject<BN>;

    idToTokenEventIndex(arg0: number | string): TransactionObject<BN>;

    pendingEvents(
      arg0: number | string,
      arg1: number | string
    ): TransactionObject<BN>;

    rewards(arg0: number | string): TransactionObject<BN>;

    create(
      _eventId: number | string,
      _tokenId: number | string,
      _imprint: string | number[],
      _uri: string,
      _reward: number | string,
      _provider: string
    ): TransactionObject<void>;

    unpause(): TransactionObject<void>;

    updateDestroyRequest(
      _eventId: number | string,
      _active: boolean
    ): TransactionObject<void>;

    accept(_eventId: number | string, _sender: string): TransactionObject<BN>;

    setStoreAddress(_storeAddress: string): TransactionObject<void>;

    pause(): TransactionObject<void>;

    destroy(_eventId: number | string): TransactionObject<void>;

    validDestroyRequest(_eventId: number | string): TransactionObject<void>;

    refuse(_eventId: number | string, _sender: string): TransactionObject<BN>;

    updateEventDestroyDelay(
      _newDelay: number | string
    ): TransactionObject<void>;

    transferOwnership(_newOwner: string): TransactionObject<void>;

    paused(): TransactionObject<boolean>;
    owner(): TransactionObject<string>;
  };
  events: {
    EventCreated: ContractEvent<{
      _tokenId: BN;
      _eventId: BN;
      _imprint: string;
      _uri: string;
      _provider: string;
      0: BN;
      1: BN;
      2: string;
      3: string;
      4: string;
    }>;
    EventAccepted: ContractEvent<{
      _eventId: BN;
      _sender: string;
      0: BN;
      1: string;
    }>;
    EventRefused: ContractEvent<{
      _eventId: BN;
      _sender: string;
      0: BN;
      1: string;
    }>;
    EventDestroyed: ContractEvent<BN>;
    DestroyRequestUpdated: ContractEvent<{
      _eventId: BN;
      _active: boolean;
      0: BN;
      1: boolean;
    }>;
    EventDestroyDelayUpdated: ContractEvent<BN>;
    Pause: ContractEvent<{}>;
    Unpause: ContractEvent<{}>;
    OwnershipTransferred: ContractEvent<{
      previousOwner: string;
      newOwner: string;
      0: string;
      1: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}