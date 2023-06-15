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

export interface ArianeeIdentityInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "waitingURI"
      | "updateValidatorAddress"
      | "compromiseIdentityDate"
      | "updateBouncerAddress"
      | "waitingImprint"
      | "validatorAddress"
      | "removeAddressFromApprovedList"
      | "validateInformation"
      | "addressFromId"
      | "addressURI"
      | "addressImprint"
      | "updateCompromiseDate"
      | "owner"
      | "bouncerAddress"
      | "updateInformations"
      | "addAddressToApprovedList"
      | "addressIsApproved"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddressApprovedAdded"
      | "AddressApprovedRemoved"
      | "URIUpdated"
      | "URIValidate"
      | "IdentityCompromised"
      | "SetAddress"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "waitingURI",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateValidatorAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "compromiseIdentityDate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBouncerAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "waitingImprint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressFromApprovedList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateInformation",
    values: [AddressLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressFromId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressURI",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressImprint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCompromiseDate",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bouncerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateInformations",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addAddressToApprovedList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressIsApproved",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "waitingURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValidatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compromiseIdentityDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBouncerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "waitingImprint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressFromApprovedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressFromId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addressURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addressImprint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCompromiseDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bouncerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInformations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAddressToApprovedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressIsApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AddressApprovedAddedEvent {
  export type InputTuple = [_newIdentity: AddressLike, _addressId: BytesLike];
  export type OutputTuple = [_newIdentity: string, _addressId: string];
  export interface OutputObject {
    _newIdentity: string;
    _addressId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AddressApprovedRemovedEvent {
  export type InputTuple = [_newIdentity: AddressLike];
  export type OutputTuple = [_newIdentity: string];
  export interface OutputObject {
    _newIdentity: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIUpdatedEvent {
  export type InputTuple = [
    _identity: AddressLike,
    _uri: string,
    _imprint: BytesLike
  ];
  export type OutputTuple = [_identity: string, _uri: string, _imprint: string];
  export interface OutputObject {
    _identity: string;
    _uri: string;
    _imprint: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace URIValidateEvent {
  export type InputTuple = [
    _identity: AddressLike,
    _uri: string,
    _imprint: BytesLike
  ];
  export type OutputTuple = [_identity: string, _uri: string, _imprint: string];
  export interface OutputObject {
    _identity: string;
    _uri: string;
    _imprint: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace IdentityCompromisedEvent {
  export type InputTuple = [
    _identity: AddressLike,
    _compromiseDate: BigNumberish
  ];
  export type OutputTuple = [_identity: string, _compromiseDate: bigint];
  export interface OutputObject {
    _identity: string;
    _compromiseDate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetAddressEvent {
  export type InputTuple = [_addressType: string, _newAddress: AddressLike];
  export type OutputTuple = [_addressType: string, _newAddress: string];
  export interface OutputObject {
    _addressType: string;
    _newAddress: string;
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

export interface ArianeeIdentity extends BaseContract {
  connect(runner?: ContractRunner | null): ArianeeIdentity;
  waitForDeployment(): Promise<this>;

  interface: ArianeeIdentityInterface;

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

  waitingURI: TypedContractMethod<[_identity: AddressLike], [string], "view">;

  updateValidatorAddress: TypedContractMethod<
    [_newValidatorAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  compromiseIdentityDate: TypedContractMethod<
    [_identity: AddressLike],
    [bigint],
    "view"
  >;

  updateBouncerAddress: TypedContractMethod<
    [_newBouncerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  waitingImprint: TypedContractMethod<
    [_identity: AddressLike],
    [string],
    "view"
  >;

  validatorAddress: TypedContractMethod<[], [string], "view">;

  removeAddressFromApprovedList: TypedContractMethod<
    [_identity: AddressLike],
    [void],
    "nonpayable"
  >;

  validateInformation: TypedContractMethod<
    [
      _identity: AddressLike,
      _uriToValidate: string,
      _imprintToValidate: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  addressFromId: TypedContractMethod<[_id: BytesLike], [string], "view">;

  addressURI: TypedContractMethod<[_identity: AddressLike], [string], "view">;

  addressImprint: TypedContractMethod<
    [_identity: AddressLike],
    [string],
    "view"
  >;

  updateCompromiseDate: TypedContractMethod<
    [_identity: AddressLike, _compromiseDate: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  bouncerAddress: TypedContractMethod<[], [string], "view">;

  updateInformations: TypedContractMethod<
    [_uri: string, _imprint: BytesLike],
    [void],
    "nonpayable"
  >;

  addAddressToApprovedList: TypedContractMethod<
    [_newIdentity: AddressLike],
    [string],
    "nonpayable"
  >;

  addressIsApproved: TypedContractMethod<
    [_identity: AddressLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "waitingURI"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "updateValidatorAddress"
  ): TypedContractMethod<
    [_newValidatorAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "compromiseIdentityDate"
  ): TypedContractMethod<[_identity: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "updateBouncerAddress"
  ): TypedContractMethod<
    [_newBouncerAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "waitingImprint"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "validatorAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeAddressFromApprovedList"
  ): TypedContractMethod<[_identity: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "validateInformation"
  ): TypedContractMethod<
    [
      _identity: AddressLike,
      _uriToValidate: string,
      _imprintToValidate: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addressFromId"
  ): TypedContractMethod<[_id: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "addressURI"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "addressImprint"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "updateCompromiseDate"
  ): TypedContractMethod<
    [_identity: AddressLike, _compromiseDate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "bouncerAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateInformations"
  ): TypedContractMethod<
    [_uri: string, _imprint: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addAddressToApprovedList"
  ): TypedContractMethod<[_newIdentity: AddressLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "addressIsApproved"
  ): TypedContractMethod<[_identity: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AddressApprovedAdded"
  ): TypedContractEvent<
    AddressApprovedAddedEvent.InputTuple,
    AddressApprovedAddedEvent.OutputTuple,
    AddressApprovedAddedEvent.OutputObject
  >;
  getEvent(
    key: "AddressApprovedRemoved"
  ): TypedContractEvent<
    AddressApprovedRemovedEvent.InputTuple,
    AddressApprovedRemovedEvent.OutputTuple,
    AddressApprovedRemovedEvent.OutputObject
  >;
  getEvent(
    key: "URIUpdated"
  ): TypedContractEvent<
    URIUpdatedEvent.InputTuple,
    URIUpdatedEvent.OutputTuple,
    URIUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "URIValidate"
  ): TypedContractEvent<
    URIValidateEvent.InputTuple,
    URIValidateEvent.OutputTuple,
    URIValidateEvent.OutputObject
  >;
  getEvent(
    key: "IdentityCompromised"
  ): TypedContractEvent<
    IdentityCompromisedEvent.InputTuple,
    IdentityCompromisedEvent.OutputTuple,
    IdentityCompromisedEvent.OutputObject
  >;
  getEvent(
    key: "SetAddress"
  ): TypedContractEvent<
    SetAddressEvent.InputTuple,
    SetAddressEvent.OutputTuple,
    SetAddressEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "AddressApprovedAdded(address,bytes3)": TypedContractEvent<
      AddressApprovedAddedEvent.InputTuple,
      AddressApprovedAddedEvent.OutputTuple,
      AddressApprovedAddedEvent.OutputObject
    >;
    AddressApprovedAdded: TypedContractEvent<
      AddressApprovedAddedEvent.InputTuple,
      AddressApprovedAddedEvent.OutputTuple,
      AddressApprovedAddedEvent.OutputObject
    >;

    "AddressApprovedRemoved(address)": TypedContractEvent<
      AddressApprovedRemovedEvent.InputTuple,
      AddressApprovedRemovedEvent.OutputTuple,
      AddressApprovedRemovedEvent.OutputObject
    >;
    AddressApprovedRemoved: TypedContractEvent<
      AddressApprovedRemovedEvent.InputTuple,
      AddressApprovedRemovedEvent.OutputTuple,
      AddressApprovedRemovedEvent.OutputObject
    >;

    "URIUpdated(address,string,bytes32)": TypedContractEvent<
      URIUpdatedEvent.InputTuple,
      URIUpdatedEvent.OutputTuple,
      URIUpdatedEvent.OutputObject
    >;
    URIUpdated: TypedContractEvent<
      URIUpdatedEvent.InputTuple,
      URIUpdatedEvent.OutputTuple,
      URIUpdatedEvent.OutputObject
    >;

    "URIValidate(address,string,bytes32)": TypedContractEvent<
      URIValidateEvent.InputTuple,
      URIValidateEvent.OutputTuple,
      URIValidateEvent.OutputObject
    >;
    URIValidate: TypedContractEvent<
      URIValidateEvent.InputTuple,
      URIValidateEvent.OutputTuple,
      URIValidateEvent.OutputObject
    >;

    "IdentityCompromised(address,uint256)": TypedContractEvent<
      IdentityCompromisedEvent.InputTuple,
      IdentityCompromisedEvent.OutputTuple,
      IdentityCompromisedEvent.OutputObject
    >;
    IdentityCompromised: TypedContractEvent<
      IdentityCompromisedEvent.InputTuple,
      IdentityCompromisedEvent.OutputTuple,
      IdentityCompromisedEvent.OutputObject
    >;

    "SetAddress(string,address)": TypedContractEvent<
      SetAddressEvent.InputTuple,
      SetAddressEvent.OutputTuple,
      SetAddressEvent.OutputObject
    >;
    SetAddress: TypedContractEvent<
      SetAddressEvent.InputTuple,
      SetAddressEvent.OutputTuple,
      SetAddressEvent.OutputObject
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
