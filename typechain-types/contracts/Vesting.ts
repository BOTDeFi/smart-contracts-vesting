/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace IVesting {
  export type BeneficiaryDataStruct = {
    account: PromiseOrValue<string>;
    periodAmount: PromiseOrValue<BigNumberish>;
    lastTransferTimestamp: PromiseOrValue<BigNumberish>;
    nextTransferTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type BeneficiaryDataStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    account: string;
    periodAmount: BigNumber;
    lastTransferTimestamp: BigNumber;
    nextTransferTimestamp: BigNumber;
  };
}

export interface VestingInterface extends utils.Interface {
  functions: {
    "BeneficiaryAdd(address,uint256)": FunctionFragment;
    "BeneficiaryAddExtended(address,uint256,uint256)": FunctionFragment;
    "BeneficiaryGetInfo(address)": FunctionFragment;
    "BeneficiaryRemove(address)": FunctionFragment;
    "BeneficiaryRestartTransfers(address)": FunctionFragment;
    "BeneficiaryUpdate(address,uint256,uint256)": FunctionFragment;
    "GetBNBBalance()": FunctionFragment;
    "GetTokensBalance()": FunctionFragment;
    "IsPaused()": FunctionFragment;
    "OwnerGet()": FunctionFragment;
    "OwnerSet(address)": FunctionFragment;
    "Pause()": FunctionFragment;
    "ReleaseTokens()": FunctionFragment;
    "Unpause()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BeneficiaryAdd"
      | "BeneficiaryAddExtended"
      | "BeneficiaryGetInfo"
      | "BeneficiaryRemove"
      | "BeneficiaryRestartTransfers"
      | "BeneficiaryUpdate"
      | "GetBNBBalance"
      | "GetTokensBalance"
      | "IsPaused"
      | "OwnerGet"
      | "OwnerSet"
      | "Pause"
      | "ReleaseTokens"
      | "Unpause"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BeneficiaryAdd",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "BeneficiaryAddExtended",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "BeneficiaryGetInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "BeneficiaryRemove",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "BeneficiaryRestartTransfers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "BeneficiaryUpdate",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "GetBNBBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GetTokensBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IsPaused", values?: undefined): string;
  encodeFunctionData(functionFragment: "OwnerGet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "OwnerSet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "Pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ReleaseTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Unpause", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "BeneficiaryAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BeneficiaryAddExtended",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BeneficiaryGetInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BeneficiaryRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BeneficiaryRestartTransfers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BeneficiaryUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetBNBBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetTokensBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IsPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OwnerGet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "OwnerSet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ReleaseTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Unpause", data: BytesLike): Result;

  events: {
    "BeneficiaryAdded(address,uint256)": EventFragment;
    "BeneficiaryRemoved(address)": EventFragment;
    "BeneficiaryRestartedTransfers(address)": EventFragment;
    "BeneficiaryUpdated(address,uint256)": EventFragment;
    "OwnerChanged(address,address)": EventFragment;
    "ReleasedTokens(uint256)": EventFragment;
    "StateChanged(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BeneficiaryAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryRemoved"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BeneficiaryRestartedTransfers"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeneficiaryUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ReleasedTokens"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateChanged"): EventFragment;
}

export interface BeneficiaryAddedEventObject {
  account: string;
  periodAmount: BigNumber;
}
export type BeneficiaryAddedEvent = TypedEvent<
  [string, BigNumber],
  BeneficiaryAddedEventObject
>;

export type BeneficiaryAddedEventFilter =
  TypedEventFilter<BeneficiaryAddedEvent>;

export interface BeneficiaryRemovedEventObject {
  account: string;
}
export type BeneficiaryRemovedEvent = TypedEvent<
  [string],
  BeneficiaryRemovedEventObject
>;

export type BeneficiaryRemovedEventFilter =
  TypedEventFilter<BeneficiaryRemovedEvent>;

export interface BeneficiaryRestartedTransfersEventObject {
  account: string;
}
export type BeneficiaryRestartedTransfersEvent = TypedEvent<
  [string],
  BeneficiaryRestartedTransfersEventObject
>;

export type BeneficiaryRestartedTransfersEventFilter =
  TypedEventFilter<BeneficiaryRestartedTransfersEvent>;

export interface BeneficiaryUpdatedEventObject {
  account: string;
  periodAmount: BigNumber;
}
export type BeneficiaryUpdatedEvent = TypedEvent<
  [string, BigNumber],
  BeneficiaryUpdatedEventObject
>;

export type BeneficiaryUpdatedEventFilter =
  TypedEventFilter<BeneficiaryUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<
  [string, string],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface ReleasedTokensEventObject {
  releasedTokens: BigNumber;
}
export type ReleasedTokensEvent = TypedEvent<
  [BigNumber],
  ReleasedTokensEventObject
>;

export type ReleasedTokensEventFilter = TypedEventFilter<ReleasedTokensEvent>;

export interface StateChangedEventObject {
  isPausedContract: boolean;
}
export type StateChangedEvent = TypedEvent<[boolean], StateChangedEventObject>;

export type StateChangedEventFilter = TypedEventFilter<StateChangedEvent>;

export interface Vesting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BeneficiaryAdd(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    BeneficiaryAddExtended(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    BeneficiaryGetInfo(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IVesting.BeneficiaryDataStructOutput]>;

    BeneficiaryRemove(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    BeneficiaryRestartTransfers(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    BeneficiaryUpdate(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    GetBNBBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    GetTokensBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    IsPaused(overrides?: CallOverrides): Promise<[boolean]>;

    OwnerGet(overrides?: CallOverrides): Promise<[string]>;

    OwnerSet(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ReleaseTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BeneficiaryAdd(
    account_: PromiseOrValue<string>,
    periodAmount_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  BeneficiaryAddExtended(
    account_: PromiseOrValue<string>,
    periodAmount_: PromiseOrValue<BigNumberish>,
    nextTransferTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  BeneficiaryGetInfo(
    account_: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IVesting.BeneficiaryDataStructOutput>;

  BeneficiaryRemove(
    account_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  BeneficiaryRestartTransfers(
    account_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  BeneficiaryUpdate(
    account_: PromiseOrValue<string>,
    periodAmount_: PromiseOrValue<BigNumberish>,
    nextTransferTimestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  GetBNBBalance(overrides?: CallOverrides): Promise<BigNumber>;

  GetTokensBalance(overrides?: CallOverrides): Promise<BigNumber>;

  IsPaused(overrides?: CallOverrides): Promise<boolean>;

  OwnerGet(overrides?: CallOverrides): Promise<string>;

  OwnerSet(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ReleaseTokens(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BeneficiaryAdd(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    BeneficiaryAddExtended(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    BeneficiaryGetInfo(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IVesting.BeneficiaryDataStructOutput>;

    BeneficiaryRemove(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    BeneficiaryRestartTransfers(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    BeneficiaryUpdate(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    GetBNBBalance(overrides?: CallOverrides): Promise<BigNumber>;

    GetTokensBalance(overrides?: CallOverrides): Promise<BigNumber>;

    IsPaused(overrides?: CallOverrides): Promise<boolean>;

    OwnerGet(overrides?: CallOverrides): Promise<string>;

    OwnerSet(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    Pause(overrides?: CallOverrides): Promise<void>;

    ReleaseTokens(overrides?: CallOverrides): Promise<void>;

    Unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "BeneficiaryAdded(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      periodAmount?: null
    ): BeneficiaryAddedEventFilter;
    BeneficiaryAdded(
      account?: PromiseOrValue<string> | null,
      periodAmount?: null
    ): BeneficiaryAddedEventFilter;

    "BeneficiaryRemoved(address)"(
      account?: PromiseOrValue<string> | null
    ): BeneficiaryRemovedEventFilter;
    BeneficiaryRemoved(
      account?: PromiseOrValue<string> | null
    ): BeneficiaryRemovedEventFilter;

    "BeneficiaryRestartedTransfers(address)"(
      account?: PromiseOrValue<string> | null
    ): BeneficiaryRestartedTransfersEventFilter;
    BeneficiaryRestartedTransfers(
      account?: PromiseOrValue<string> | null
    ): BeneficiaryRestartedTransfersEventFilter;

    "BeneficiaryUpdated(address,uint256)"(
      account?: PromiseOrValue<string> | null,
      periodAmount?: null
    ): BeneficiaryUpdatedEventFilter;
    BeneficiaryUpdated(
      account?: PromiseOrValue<string> | null,
      periodAmount?: null
    ): BeneficiaryUpdatedEventFilter;

    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    "ReleasedTokens(uint256)"(releasedTokens?: null): ReleasedTokensEventFilter;
    ReleasedTokens(releasedTokens?: null): ReleasedTokensEventFilter;

    "StateChanged(bool)"(isPausedContract?: null): StateChangedEventFilter;
    StateChanged(isPausedContract?: null): StateChangedEventFilter;
  };

  estimateGas: {
    BeneficiaryAdd(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    BeneficiaryAddExtended(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    BeneficiaryGetInfo(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    BeneficiaryRemove(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    BeneficiaryRestartTransfers(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    BeneficiaryUpdate(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    GetBNBBalance(overrides?: CallOverrides): Promise<BigNumber>;

    GetTokensBalance(overrides?: CallOverrides): Promise<BigNumber>;

    IsPaused(overrides?: CallOverrides): Promise<BigNumber>;

    OwnerGet(overrides?: CallOverrides): Promise<BigNumber>;

    OwnerSet(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ReleaseTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BeneficiaryAdd(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    BeneficiaryAddExtended(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    BeneficiaryGetInfo(
      account_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BeneficiaryRemove(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    BeneficiaryRestartTransfers(
      account_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    BeneficiaryUpdate(
      account_: PromiseOrValue<string>,
      periodAmount_: PromiseOrValue<BigNumberish>,
      nextTransferTimestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    GetBNBBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GetTokensBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IsPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OwnerGet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    OwnerSet(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ReleaseTokens(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
