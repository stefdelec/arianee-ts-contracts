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
      | "ArianeeIdentityStorageV0Location"
      | "DEFAULT_ADMIN_ROLE"
      | "addAddressToApprovedList"
      | "addressFromId"
      | "addressImprint"
      | "addressIsApproved"
      | "addressURI"
      | "bouncerAddress"
      | "compromiseIdentityDate"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "initialize"
      | "isTrustedForwarder"
      | "removeAddressFromApprovedList"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "trustedForwarder"
      | "updateBouncerAddress"
      | "updateCompromiseDate"
      | "updateInformations"
      | "updateValidatorAddress"
      | "validateInformation"
      | "validatorAddress"
      | "waitingImprint"
      | "waitingURI"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddressApprovedAdded"
      | "AddressApprovedRemoved"
      | "IdentityCompromised"
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "SetAddress"
      | "URIUpdated"
      | "URIValidate"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ArianeeIdentityStorageV0Location",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAddressToApprovedList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressFromId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressImprint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressIsApproved",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addressURI",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "bouncerAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "compromiseIdentityDate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAddressFromApprovedList",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedForwarder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateBouncerAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateCompromiseDate",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInformations",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateValidatorAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateInformation",
    values: [AddressLike, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "waitingImprint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "waitingURI",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ArianeeIdentityStorageV0Location",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAddressToApprovedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressFromId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressImprint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressIsApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addressURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bouncerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "compromiseIdentityDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAddressFromApprovedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBouncerAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateCompromiseDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInformations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateValidatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateInformation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "waitingImprint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "waitingURI", data: BytesLike): Result;
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

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
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

  ArianeeIdentityStorageV0Location: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  addAddressToApprovedList: TypedContractMethod<
    [_newIdentity: AddressLike],
    [string],
    "nonpayable"
  >;

  addressFromId: TypedContractMethod<[_id: BytesLike], [string], "view">;

  addressImprint: TypedContractMethod<
    [_identity: AddressLike],
    [string],
    "view"
  >;

  addressIsApproved: TypedContractMethod<
    [_identity: AddressLike],
    [boolean],
    "view"
  >;

  addressURI: TypedContractMethod<[_identity: AddressLike], [string], "view">;

  bouncerAddress: TypedContractMethod<[], [string], "view">;

  compromiseIdentityDate: TypedContractMethod<
    [_identity: AddressLike],
    [bigint],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  initialize: TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _newBouncerAddress: AddressLike,
      _newValidatorAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  isTrustedForwarder: TypedContractMethod<
    [forwarder: AddressLike],
    [boolean],
    "view"
  >;

  removeAddressFromApprovedList: TypedContractMethod<
    [_identity: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  trustedForwarder: TypedContractMethod<[], [string], "view">;

  updateBouncerAddress: TypedContractMethod<
    [_newBouncerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  updateCompromiseDate: TypedContractMethod<
    [_identity: AddressLike, _compromiseDate: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateInformations: TypedContractMethod<
    [_uri: string, _imprint: BytesLike],
    [void],
    "nonpayable"
  >;

  updateValidatorAddress: TypedContractMethod<
    [_newValidatorAddress: AddressLike],
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

  validatorAddress: TypedContractMethod<[], [string], "view">;

  waitingImprint: TypedContractMethod<
    [_identity: AddressLike],
    [string],
    "view"
  >;

  waitingURI: TypedContractMethod<[_identity: AddressLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ArianeeIdentityStorageV0Location"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addAddressToApprovedList"
  ): TypedContractMethod<[_newIdentity: AddressLike], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "addressFromId"
  ): TypedContractMethod<[_id: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "addressImprint"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "addressIsApproved"
  ): TypedContractMethod<[_identity: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "addressURI"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "bouncerAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "compromiseIdentityDate"
  ): TypedContractMethod<[_identity: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _initialAdmin: AddressLike,
      _newBouncerAddress: AddressLike,
      _newValidatorAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isTrustedForwarder"
  ): TypedContractMethod<[forwarder: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "removeAddressFromApprovedList"
  ): TypedContractMethod<[_identity: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "trustedForwarder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "updateBouncerAddress"
  ): TypedContractMethod<
    [_newBouncerAddress: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateCompromiseDate"
  ): TypedContractMethod<
    [_identity: AddressLike, _compromiseDate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateInformations"
  ): TypedContractMethod<
    [_uri: string, _imprint: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateValidatorAddress"
  ): TypedContractMethod<
    [_newValidatorAddress: AddressLike],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "validatorAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "waitingImprint"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "waitingURI"
  ): TypedContractMethod<[_identity: AddressLike], [string], "view">;

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
    key: "IdentityCompromised"
  ): TypedContractEvent<
    IdentityCompromisedEvent.InputTuple,
    IdentityCompromisedEvent.OutputTuple,
    IdentityCompromisedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "SetAddress"
  ): TypedContractEvent<
    SetAddressEvent.InputTuple,
    SetAddressEvent.OutputTuple,
    SetAddressEvent.OutputObject
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

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
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
  };
}
