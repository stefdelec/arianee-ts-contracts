/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ArianeeLostInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "setAuthorizedIdentity"
      | "setManagerIdentity"
      | "setMissingStatus"
      | "setStolenStatus"
      | "transferOwnership"
      | "unsetAuthorizedIdentity"
      | "unsetMissingStatus"
      | "unsetStolenStatus"
      | "getManagerIdentity"
      | "isAddressAuthorized"
      | "isMissing"
      | "isStolen"
      | "owner"
      | "smartAsset"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "NewManagerIdentity"
      | "Missing"
      | "UnMissing"
      | "AuthorizedIdentityAdded"
      | "AuthorizedIdentityRemoved"
      | "Stolen"
      | "UnStolen"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "setAuthorizedIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setManagerIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMissingStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStolenStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetAuthorizedIdentity",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetMissingStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetStolenStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getManagerIdentity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAddressAuthorized",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isMissing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isStolen",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "smartAsset",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "setAuthorizedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setManagerIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStolenStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetAuthorizedIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetMissingStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unsetStolenStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getManagerIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAddressAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isMissing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isStolen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "smartAsset", data: BytesLike): Result;
}

export namespace NewManagerIdentityEvent {
  export type InputTuple = [_newManagerIdentity: AddressLike];
  export type OutputTuple = [_newManagerIdentity: string];
  export interface OutputObject {
    _newManagerIdentity: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MissingEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnMissingEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuthorizedIdentityAddedEvent {
  export type InputTuple = [_newIdentityAuthorized: AddressLike];
  export type OutputTuple = [_newIdentityAuthorized: string];
  export interface OutputObject {
    _newIdentityAuthorized: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AuthorizedIdentityRemovedEvent {
  export type InputTuple = [_newIdentityUnauthorized: AddressLike];
  export type OutputTuple = [_newIdentityUnauthorized: string];
  export interface OutputObject {
    _newIdentityUnauthorized: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StolenEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnStolenEvent {
  export type InputTuple = [_tokenId: BigNumberish];
  export type OutputTuple = [_tokenId: bigint];
  export interface OutputObject {
    _tokenId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ArianeeLost extends BaseContract {
  connect(runner?: ContractRunner | null): ArianeeLost;
  waitForDeployment(): Promise<this>;

  interface: ArianeeLostInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  setAuthorizedIdentity: TypedContractMethod<
    [_newIdentityAuthorized: AddressLike],
    [void],
    "nonpayable"
  >;

  setManagerIdentity: TypedContractMethod<
    [_managerIdentity: AddressLike],
    [void],
    "nonpayable"
  >;

  setMissingStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  setStolenStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unsetAuthorizedIdentity: TypedContractMethod<
    [_newIdentityUnauthorized: AddressLike],
    [void],
    "nonpayable"
  >;

  unsetMissingStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  unsetStolenStatus: TypedContractMethod<
    [_tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getManagerIdentity: TypedContractMethod<[], [string], "view">;

  isAddressAuthorized: TypedContractMethod<
    [_address: AddressLike],
    [boolean],
    "view"
  >;

  isMissing: TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;

  isStolen: TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  smartAsset: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "setAuthorizedIdentity"
  ): TypedContractMethod<
    [_newIdentityAuthorized: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setManagerIdentity"
  ): TypedContractMethod<[_managerIdentity: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMissingStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setStolenStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unsetAuthorizedIdentity"
  ): TypedContractMethod<
    [_newIdentityUnauthorized: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unsetMissingStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unsetStolenStatus"
  ): TypedContractMethod<[_tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getManagerIdentity"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isAddressAuthorized"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isMissing"
  ): TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isStolen"
  ): TypedContractMethod<[_tokenId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "smartAsset"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "NewManagerIdentity"
  ): TypedContractEvent<
    NewManagerIdentityEvent.InputTuple,
    NewManagerIdentityEvent.OutputTuple,
    NewManagerIdentityEvent.OutputObject
  >;
  getEvent(
    key: "Missing"
  ): TypedContractEvent<
    MissingEvent.InputTuple,
    MissingEvent.OutputTuple,
    MissingEvent.OutputObject
  >;
  getEvent(
    key: "UnMissing"
  ): TypedContractEvent<
    UnMissingEvent.InputTuple,
    UnMissingEvent.OutputTuple,
    UnMissingEvent.OutputObject
  >;
  getEvent(
    key: "AuthorizedIdentityAdded"
  ): TypedContractEvent<
    AuthorizedIdentityAddedEvent.InputTuple,
    AuthorizedIdentityAddedEvent.OutputTuple,
    AuthorizedIdentityAddedEvent.OutputObject
  >;
  getEvent(
    key: "AuthorizedIdentityRemoved"
  ): TypedContractEvent<
    AuthorizedIdentityRemovedEvent.InputTuple,
    AuthorizedIdentityRemovedEvent.OutputTuple,
    AuthorizedIdentityRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Stolen"
  ): TypedContractEvent<
    StolenEvent.InputTuple,
    StolenEvent.OutputTuple,
    StolenEvent.OutputObject
  >;
  getEvent(
    key: "UnStolen"
  ): TypedContractEvent<
    UnStolenEvent.InputTuple,
    UnStolenEvent.OutputTuple,
    UnStolenEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "NewManagerIdentity(address)": TypedContractEvent<
      NewManagerIdentityEvent.InputTuple,
      NewManagerIdentityEvent.OutputTuple,
      NewManagerIdentityEvent.OutputObject
    >;
    NewManagerIdentity: TypedContractEvent<
      NewManagerIdentityEvent.InputTuple,
      NewManagerIdentityEvent.OutputTuple,
      NewManagerIdentityEvent.OutputObject
    >;

    "Missing(uint256)": TypedContractEvent<
      MissingEvent.InputTuple,
      MissingEvent.OutputTuple,
      MissingEvent.OutputObject
    >;
    Missing: TypedContractEvent<
      MissingEvent.InputTuple,
      MissingEvent.OutputTuple,
      MissingEvent.OutputObject
    >;

    "UnMissing(uint256)": TypedContractEvent<
      UnMissingEvent.InputTuple,
      UnMissingEvent.OutputTuple,
      UnMissingEvent.OutputObject
    >;
    UnMissing: TypedContractEvent<
      UnMissingEvent.InputTuple,
      UnMissingEvent.OutputTuple,
      UnMissingEvent.OutputObject
    >;

    "AuthorizedIdentityAdded(address)": TypedContractEvent<
      AuthorizedIdentityAddedEvent.InputTuple,
      AuthorizedIdentityAddedEvent.OutputTuple,
      AuthorizedIdentityAddedEvent.OutputObject
    >;
    AuthorizedIdentityAdded: TypedContractEvent<
      AuthorizedIdentityAddedEvent.InputTuple,
      AuthorizedIdentityAddedEvent.OutputTuple,
      AuthorizedIdentityAddedEvent.OutputObject
    >;

    "AuthorizedIdentityRemoved(address)": TypedContractEvent<
      AuthorizedIdentityRemovedEvent.InputTuple,
      AuthorizedIdentityRemovedEvent.OutputTuple,
      AuthorizedIdentityRemovedEvent.OutputObject
    >;
    AuthorizedIdentityRemoved: TypedContractEvent<
      AuthorizedIdentityRemovedEvent.InputTuple,
      AuthorizedIdentityRemovedEvent.OutputTuple,
      AuthorizedIdentityRemovedEvent.OutputObject
    >;

    "Stolen(uint256)": TypedContractEvent<
      StolenEvent.InputTuple,
      StolenEvent.OutputTuple,
      StolenEvent.OutputObject
    >;
    Stolen: TypedContractEvent<
      StolenEvent.InputTuple,
      StolenEvent.OutputTuple,
      StolenEvent.OutputObject
    >;

    "UnStolen(uint256)": TypedContractEvent<
      UnStolenEvent.InputTuple,
      UnStolenEvent.OutputTuple,
      UnStolenEvent.OutputObject
    >;
    UnStolen: TypedContractEvent<
      UnStolenEvent.InputTuple,
      UnStolenEvent.OutputTuple,
      UnStolenEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
