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
} from "./common";

export interface HubUpInterface extends utils.Interface {
  functions: {
    "blockEventPayment(uint256)": FunctionFragment;
    "claimHostPayment(uint256)": FunctionFragment;
    "claimParticipantStake(uint256,address,string)": FunctionFragment;
    "createEvent(uint256,uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "events(uint256)": FunctionFragment;
    "joinEvent(uint256)": FunctionFragment;
    "leaveEvent(uint256,address)": FunctionFragment;
    "nextEventId()": FunctionFragment;
    "owner()": FunctionFragment;
    "takeHostPaymentByOwner(uint256)": FunctionFragment;
    "unblockEventPayment(uint256)": FunctionFragment;
    "usdcToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "blockEventPayment"
      | "claimHostPayment"
      | "claimParticipantStake"
      | "createEvent"
      | "events"
      | "joinEvent"
      | "leaveEvent"
      | "nextEventId"
      | "owner"
      | "takeHostPaymentByOwner"
      | "unblockEventPayment"
      | "usdcToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "blockEventPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimHostPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimParticipantStake",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvent",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "events",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "joinEvent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveEvent",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "nextEventId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "takeHostPaymentByOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unblockEventPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "usdcToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "blockEventPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimHostPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimParticipantStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "events", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinEvent", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveEvent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextEventId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "takeHostPaymentByOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unblockEventPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdcToken", data: BytesLike): Result;

  events: {
    "EventCreated(uint256,address,string)": EventFragment;
    "EventFormalized(uint256)": EventFragment;
    "EventPaymentBlocked(uint256)": EventFragment;
    "EventPaymentUnblocked(uint256)": EventFragment;
    "ParticipantJoined(uint256,address)": EventFragment;
    "ParticipantLeft(uint256,address)": EventFragment;
    "PaymentClaimed(uint256,address,uint256)": EventFragment;
    "PaymentSentBack(uint256,address)": EventFragment;
    "StakeClaimed(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EventCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventFormalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventPaymentBlocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventPaymentUnblocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParticipantJoined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ParticipantLeft"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentSentBack"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakeClaimed"): EventFragment;
}

export interface EventCreatedEventObject {
  eventId: BigNumber;
  host: string;
  eventCode: string;
}
export type EventCreatedEvent = TypedEvent<
  [BigNumber, string, string],
  EventCreatedEventObject
>;

export type EventCreatedEventFilter = TypedEventFilter<EventCreatedEvent>;

export interface EventFormalizedEventObject {
  eventId: BigNumber;
}
export type EventFormalizedEvent = TypedEvent<
  [BigNumber],
  EventFormalizedEventObject
>;

export type EventFormalizedEventFilter = TypedEventFilter<EventFormalizedEvent>;

export interface EventPaymentBlockedEventObject {
  eventId: BigNumber;
}
export type EventPaymentBlockedEvent = TypedEvent<
  [BigNumber],
  EventPaymentBlockedEventObject
>;

export type EventPaymentBlockedEventFilter =
  TypedEventFilter<EventPaymentBlockedEvent>;

export interface EventPaymentUnblockedEventObject {
  eventId: BigNumber;
}
export type EventPaymentUnblockedEvent = TypedEvent<
  [BigNumber],
  EventPaymentUnblockedEventObject
>;

export type EventPaymentUnblockedEventFilter =
  TypedEventFilter<EventPaymentUnblockedEvent>;

export interface ParticipantJoinedEventObject {
  eventId: BigNumber;
  participant: string;
}
export type ParticipantJoinedEvent = TypedEvent<
  [BigNumber, string],
  ParticipantJoinedEventObject
>;

export type ParticipantJoinedEventFilter =
  TypedEventFilter<ParticipantJoinedEvent>;

export interface ParticipantLeftEventObject {
  eventId: BigNumber;
  participant: string;
}
export type ParticipantLeftEvent = TypedEvent<
  [BigNumber, string],
  ParticipantLeftEventObject
>;

export type ParticipantLeftEventFilter = TypedEventFilter<ParticipantLeftEvent>;

export interface PaymentClaimedEventObject {
  eventId: BigNumber;
  host: string;
  amount: BigNumber;
}
export type PaymentClaimedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  PaymentClaimedEventObject
>;

export type PaymentClaimedEventFilter = TypedEventFilter<PaymentClaimedEvent>;

export interface PaymentSentBackEventObject {
  eventId: BigNumber;
  participant: string;
}
export type PaymentSentBackEvent = TypedEvent<
  [BigNumber, string],
  PaymentSentBackEventObject
>;

export type PaymentSentBackEventFilter = TypedEventFilter<PaymentSentBackEvent>;

export interface StakeClaimedEventObject {
  eventId: BigNumber;
  participant: string;
  amount: BigNumber;
}
export type StakeClaimedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  StakeClaimedEventObject
>;

export type StakeClaimedEventFilter = TypedEventFilter<StakeClaimedEvent>;

export interface HubUp extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HubUpInterface;

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
    blockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimHostPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    claimParticipantStake(
      eventId: BigNumberish,
      participant: string,
      code: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createEvent(
      startTime: BigNumberish,
      endTime: BigNumberish,
      price: BigNumberish,
      stakeAmount: BigNumberish,
      minParticipants: BigNumberish,
      maxParticipants: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string
      ] & {
        host: string;
        startTime: BigNumber;
        endTime: BigNumber;
        price: BigNumber;
        stakeAmount: BigNumber;
        minParticipants: BigNumber;
        maxParticipants: BigNumber;
        participantCount: BigNumber;
        unstakedParticipantCount: BigNumber;
        totalParticipantsJoined: BigNumber;
        isFinalized: boolean;
        isPaymentBlocked: boolean;
        eventCode: string;
      }
    >;

    joinEvent(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    leaveEvent(
      eventId: BigNumberish,
      participant: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    nextEventId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    takeHostPaymentByOwner(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    unblockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    usdcToken(overrides?: CallOverrides): Promise<[string]>;
  };

  blockEventPayment(
    eventId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimHostPayment(
    eventId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  claimParticipantStake(
    eventId: BigNumberish,
    participant: string,
    code: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createEvent(
    startTime: BigNumberish,
    endTime: BigNumberish,
    price: BigNumberish,
    stakeAmount: BigNumberish,
    minParticipants: BigNumberish,
    maxParticipants: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  events(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      string
    ] & {
      host: string;
      startTime: BigNumber;
      endTime: BigNumber;
      price: BigNumber;
      stakeAmount: BigNumber;
      minParticipants: BigNumber;
      maxParticipants: BigNumber;
      participantCount: BigNumber;
      unstakedParticipantCount: BigNumber;
      totalParticipantsJoined: BigNumber;
      isFinalized: boolean;
      isPaymentBlocked: boolean;
      eventCode: string;
    }
  >;

  joinEvent(
    eventId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  leaveEvent(
    eventId: BigNumberish,
    participant: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  nextEventId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  takeHostPaymentByOwner(
    eventId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  unblockEventPayment(
    eventId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  usdcToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    blockEventPayment(
      eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimHostPayment(
      eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimParticipantStake(
      eventId: BigNumberish,
      participant: string,
      code: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createEvent(
      startTime: BigNumberish,
      endTime: BigNumberish,
      price: BigNumberish,
      stakeAmount: BigNumberish,
      minParticipants: BigNumberish,
      maxParticipants: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string
      ] & {
        host: string;
        startTime: BigNumber;
        endTime: BigNumber;
        price: BigNumber;
        stakeAmount: BigNumber;
        minParticipants: BigNumber;
        maxParticipants: BigNumber;
        participantCount: BigNumber;
        unstakedParticipantCount: BigNumber;
        totalParticipantsJoined: BigNumber;
        isFinalized: boolean;
        isPaymentBlocked: boolean;
        eventCode: string;
      }
    >;

    joinEvent(eventId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    leaveEvent(
      eventId: BigNumberish,
      participant: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nextEventId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    takeHostPaymentByOwner(
      eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unblockEventPayment(
      eventId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    usdcToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "EventCreated(uint256,address,string)"(
      eventId?: BigNumberish | null,
      host?: string | null,
      eventCode?: null
    ): EventCreatedEventFilter;
    EventCreated(
      eventId?: BigNumberish | null,
      host?: string | null,
      eventCode?: null
    ): EventCreatedEventFilter;

    "EventFormalized(uint256)"(
      eventId?: BigNumberish | null
    ): EventFormalizedEventFilter;
    EventFormalized(eventId?: BigNumberish | null): EventFormalizedEventFilter;

    "EventPaymentBlocked(uint256)"(
      eventId?: BigNumberish | null
    ): EventPaymentBlockedEventFilter;
    EventPaymentBlocked(
      eventId?: BigNumberish | null
    ): EventPaymentBlockedEventFilter;

    "EventPaymentUnblocked(uint256)"(
      eventId?: BigNumberish | null
    ): EventPaymentUnblockedEventFilter;
    EventPaymentUnblocked(
      eventId?: BigNumberish | null
    ): EventPaymentUnblockedEventFilter;

    "ParticipantJoined(uint256,address)"(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): ParticipantJoinedEventFilter;
    ParticipantJoined(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): ParticipantJoinedEventFilter;

    "ParticipantLeft(uint256,address)"(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): ParticipantLeftEventFilter;
    ParticipantLeft(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): ParticipantLeftEventFilter;

    "PaymentClaimed(uint256,address,uint256)"(
      eventId?: BigNumberish | null,
      host?: string | null,
      amount?: null
    ): PaymentClaimedEventFilter;
    PaymentClaimed(
      eventId?: BigNumberish | null,
      host?: string | null,
      amount?: null
    ): PaymentClaimedEventFilter;

    "PaymentSentBack(uint256,address)"(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): PaymentSentBackEventFilter;
    PaymentSentBack(
      eventId?: BigNumberish | null,
      participant?: string | null
    ): PaymentSentBackEventFilter;

    "StakeClaimed(uint256,address,uint256)"(
      eventId?: BigNumberish | null,
      participant?: string | null,
      amount?: null
    ): StakeClaimedEventFilter;
    StakeClaimed(
      eventId?: BigNumberish | null,
      participant?: string | null,
      amount?: null
    ): StakeClaimedEventFilter;
  };

  estimateGas: {
    blockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimHostPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    claimParticipantStake(
      eventId: BigNumberish,
      participant: string,
      code: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createEvent(
      startTime: BigNumberish,
      endTime: BigNumberish,
      price: BigNumberish,
      stakeAmount: BigNumberish,
      minParticipants: BigNumberish,
      maxParticipants: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    events(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    joinEvent(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    leaveEvent(
      eventId: BigNumberish,
      participant: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    nextEventId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    takeHostPaymentByOwner(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    unblockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    usdcToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimHostPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    claimParticipantStake(
      eventId: BigNumberish,
      participant: string,
      code: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createEvent(
      startTime: BigNumberish,
      endTime: BigNumberish,
      price: BigNumberish,
      stakeAmount: BigNumberish,
      minParticipants: BigNumberish,
      maxParticipants: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    events(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinEvent(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    leaveEvent(
      eventId: BigNumberish,
      participant: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    nextEventId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeHostPaymentByOwner(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    unblockEventPayment(
      eventId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    usdcToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
