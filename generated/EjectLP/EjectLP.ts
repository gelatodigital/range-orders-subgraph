// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogCancelEject extends ethereum.Event {
  get params(): LogCancelEject__Params {
    return new LogCancelEject__Params(this);
  }
}

export class LogCancelEject__Params {
  _event: LogCancelEject;

  constructor(event: LogCancelEject) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LogEject extends ethereum.Event {
  get params(): LogEject__Params {
    return new LogEject__Params(this);
  }
}

export class LogEject__Params {
  _event: LogEject;

  constructor(event: LogEject) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount0Out(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount1Out(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get feeAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get receiver(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class LogRetrieveDust extends ethereum.Event {
  get params(): LogRetrieveDust__Params {
    return new LogRetrieveDust__Params(this);
  }
}

export class LogRetrieveDust__Params {
  _event: LogRetrieveDust;

  constructor(event: LogRetrieveDust) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogSetDuration extends ethereum.Event {
  get params(): LogSetDuration__Params {
    return new LogSetDuration__Params(this);
  }
}

export class LogSetDuration__Params {
  _event: LogSetDuration;

  constructor(event: LogSetDuration) {
    this._event = event;
  }

  get duration(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LogSetEject extends ethereum.Event {
  get params(): LogSetEject__Params {
    return new LogSetEject__Params(this);
  }
}

export class LogSetEject__Params {
  _event: LogSetEject;

  constructor(event: LogSetEject) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get orderParams(): LogSetEjectOrderParamsStruct {
    return this._event.parameters[1].value.toTuple() as LogSetEjectOrderParamsStruct;
  }

  get startTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get sender(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class LogSetEjectOrderParamsStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get tickThreshold(): i32 {
    return this[1].toI32();
  }

  get ejectAbove(): boolean {
    return this[2].toBoolean();
  }

  get receiver(): Address {
    return this[3].toAddress();
  }

  get feeToken(): Address {
    return this[4].toAddress();
  }

  get resolver(): Address {
    return this[5].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[6].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[7].toBoolean();
  }
}

export class LogSetMinimumFee extends ethereum.Event {
  get params(): LogSetMinimumFee__Params {
    return new LogSetMinimumFee__Params(this);
  }
}

export class LogSetMinimumFee__Params {
  _event: LogSetMinimumFee;

  constructor(event: LogSetMinimumFee) {
    this._event = event;
  }

  get minimumFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LogSettle extends ethereum.Event {
  get params(): LogSettle__Params {
    return new LogSettle__Params(this);
  }
}

export class LogSettle__Params {
  _event: LogSettle;

  constructor(event: LogSettle) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount0Out(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount1Out(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get feeAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get receiver(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class EjectLP__canEjectInputOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get receiver(): Address {
    return this[2].toAddress();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[6].toBoolean();
  }
}

export class EjectLP__isBurntResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class EjectLP__isEjectableResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class EjectLP__isEjectableInputOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get receiver(): Address {
    return this[2].toAddress();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[6].toBoolean();
  }
}

export class EjectLP__isExpiredResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class EjectLP__isExpiredInputOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get receiver(): Address {
    return this[2].toAddress();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[6].toBoolean();
  }
}

export class EjectLP__isNotApprovedResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class EjectLP__ownerHasChangedResult {
  value0: boolean;
  value1: string;

  constructor(value0: boolean, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class EjectLP extends ethereum.SmartContract {
  static bind(address: Address): EjectLP {
    return new EjectLP("EjectLP", address);
  }

  canEject(
    tokenId_: BigInt,
    order_: EjectLP__canEjectInputOrder_Struct
  ): BigInt {
    let result = super.call(
      "canEject",
      "canEject(uint256,(int24,bool,address,address,uint256,uint256,bool)):(uint128)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_)
      ]
    );

    return result[0].toBigInt();
  }

  try_canEject(
    tokenId_: BigInt,
    order_: EjectLP__canEjectInputOrder_Struct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "canEject",
      "canEject(uint256,(int24,bool,address,address,uint256,uint256,bool)):(uint128)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  duration(): BigInt {
    let result = super.call("duration", "duration():(uint256)", []);

    return result[0].toBigInt();
  }

  try_duration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("duration", "duration():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  hashById(param0: BigInt): Bytes {
    let result = super.call("hashById", "hashById(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_hashById(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("hashById", "hashById(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isBurnt(tokenId_: BigInt): EjectLP__isBurntResult {
    let result = super.call("isBurnt", "isBurnt(uint256):(bool,string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId_)
    ]);

    return new EjectLP__isBurntResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_isBurnt(tokenId_: BigInt): ethereum.CallResult<EjectLP__isBurntResult> {
    let result = super.tryCall("isBurnt", "isBurnt(uint256):(bool,string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId_)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__isBurntResult(value[0].toBoolean(), value[1].toString())
    );
  }

  isEjectable(
    tokenId_: BigInt,
    order_: EjectLP__isEjectableInputOrder_Struct,
    pool_: Address
  ): EjectLP__isEjectableResult {
    let result = super.call(
      "isEjectable",
      "isEjectable(uint256,(int24,bool,address,address,uint256,uint256,bool),address):(bool,string)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_),
        ethereum.Value.fromAddress(pool_)
      ]
    );

    return new EjectLP__isEjectableResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_isEjectable(
    tokenId_: BigInt,
    order_: EjectLP__isEjectableInputOrder_Struct,
    pool_: Address
  ): ethereum.CallResult<EjectLP__isEjectableResult> {
    let result = super.tryCall(
      "isEjectable",
      "isEjectable(uint256,(int24,bool,address,address,uint256,uint256,bool),address):(bool,string)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_),
        ethereum.Value.fromAddress(pool_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__isEjectableResult(value[0].toBoolean(), value[1].toString())
    );
  }

  isExpired(
    order_: EjectLP__isExpiredInputOrder_Struct
  ): EjectLP__isExpiredResult {
    let result = super.call(
      "isExpired",
      "isExpired((int24,bool,address,address,uint256,uint256,bool)):(bool,string)",
      [ethereum.Value.fromTuple(order_)]
    );

    return new EjectLP__isExpiredResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_isExpired(
    order_: EjectLP__isExpiredInputOrder_Struct
  ): ethereum.CallResult<EjectLP__isExpiredResult> {
    let result = super.tryCall(
      "isExpired",
      "isExpired((int24,bool,address,address,uint256,uint256,bool)):(bool,string)",
      [ethereum.Value.fromTuple(order_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__isExpiredResult(value[0].toBoolean(), value[1].toString())
    );
  }

  isNotApproved(tokenId_: BigInt): EjectLP__isNotApprovedResult {
    let result = super.call(
      "isNotApproved",
      "isNotApproved(uint256):(bool,string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId_)]
    );

    return new EjectLP__isNotApprovedResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_isNotApproved(
    tokenId_: BigInt
  ): ethereum.CallResult<EjectLP__isNotApprovedResult> {
    let result = super.tryCall(
      "isNotApproved",
      "isNotApproved(uint256):(bool,string)",
      [ethereum.Value.fromUnsignedBigInt(tokenId_)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__isNotApprovedResult(
        value[0].toBoolean(),
        value[1].toString()
      )
    );
  }

  minimumFee(): BigInt {
    let result = super.call("minimumFee", "minimumFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minimumFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minimumFee", "minimumFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftPositionManager(): Address {
    let result = super.call(
      "nftPositionManager",
      "nftPositionManager():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_nftPositionManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nftPositionManager",
      "nftPositionManager():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerHasChanged(
    tokenId_: BigInt,
    owner_: Address
  ): EjectLP__ownerHasChangedResult {
    let result = super.call(
      "ownerHasChanged",
      "ownerHasChanged(uint256,address):(bool,string)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromAddress(owner_)
      ]
    );

    return new EjectLP__ownerHasChangedResult(
      result[0].toBoolean(),
      result[1].toString()
    );
  }

  try_ownerHasChanged(
    tokenId_: BigInt,
    owner_: Address
  ): ethereum.CallResult<EjectLP__ownerHasChangedResult> {
    let result = super.tryCall(
      "ownerHasChanged",
      "ownerHasChanged(uint256,address):(bool,string)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromAddress(owner_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__ownerHasChangedResult(
        value[0].toBoolean(),
        value[1].toString()
      )
    );
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pokeMe(): Address {
    let result = super.call("pokeMe", "pokeMe():(address)", []);

    return result[0].toAddress();
  }

  try_pokeMe(): ethereum.CallResult<Address> {
    let result = super.tryCall("pokeMe", "pokeMe():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  taskById(param0: BigInt): Bytes {
    let result = super.call("taskById", "taskById(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_taskById(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("taskById", "taskById(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get nftPositionManager_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get pokeMe_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get factory_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get gelato_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get tokenId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get order_(): CancelCallOrder_Struct {
    return this._call.inputValues[1].value.toTuple() as CancelCallOrder_Struct;
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CancelCallOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get receiver(): Address {
    return this[2].toAddress();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[6].toBoolean();
  }
}

export class EjectOrSettleCall extends ethereum.Call {
  get inputs(): EjectOrSettleCall__Inputs {
    return new EjectOrSettleCall__Inputs(this);
  }

  get outputs(): EjectOrSettleCall__Outputs {
    return new EjectOrSettleCall__Outputs(this);
  }
}

export class EjectOrSettleCall__Inputs {
  _call: EjectOrSettleCall;

  constructor(call: EjectOrSettleCall) {
    this._call = call;
  }

  get tokenId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get order_(): EjectOrSettleCallOrder_Struct {
    return this._call.inputValues[1].value.toTuple() as EjectOrSettleCallOrder_Struct;
  }

  get isEjection_(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class EjectOrSettleCall__Outputs {
  _call: EjectOrSettleCall;

  constructor(call: EjectOrSettleCall) {
    this._call = call;
  }
}

export class EjectOrSettleCallOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get receiver(): Address {
    return this[2].toAddress();
  }

  get owner(): Address {
    return this[3].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[4].toBigInt();
  }

  get startTime(): BigInt {
    return this[5].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[6].toBoolean();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MulipleRetrieveDustCall extends ethereum.Call {
  get inputs(): MulipleRetrieveDustCall__Inputs {
    return new MulipleRetrieveDustCall__Inputs(this);
  }

  get outputs(): MulipleRetrieveDustCall__Outputs {
    return new MulipleRetrieveDustCall__Outputs(this);
  }
}

export class MulipleRetrieveDustCall__Inputs {
  _call: MulipleRetrieveDustCall;

  constructor(call: MulipleRetrieveDustCall) {
    this._call = call;
  }

  get tokens_(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get recipient_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class MulipleRetrieveDustCall__Outputs {
  _call: MulipleRetrieveDustCall;

  constructor(call: MulipleRetrieveDustCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ScheduleCall extends ethereum.Call {
  get inputs(): ScheduleCall__Inputs {
    return new ScheduleCall__Inputs(this);
  }

  get outputs(): ScheduleCall__Outputs {
    return new ScheduleCall__Outputs(this);
  }
}

export class ScheduleCall__Inputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }

  get orderParams_(): ScheduleCallOrderParams_Struct {
    return this._call.inputValues[0].value.toTuple() as ScheduleCallOrderParams_Struct;
  }
}

export class ScheduleCall__Outputs {
  _call: ScheduleCall;

  constructor(call: ScheduleCall) {
    this._call = call;
  }
}

export class ScheduleCallOrderParams_Struct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get tickThreshold(): i32 {
    return this[1].toI32();
  }

  get ejectAbove(): boolean {
    return this[2].toBoolean();
  }

  get receiver(): Address {
    return this[3].toAddress();
  }

  get feeToken(): Address {
    return this[4].toAddress();
  }

  get resolver(): Address {
    return this[5].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[6].toBigInt();
  }

  get ejectAtExpiry(): boolean {
    return this[7].toBoolean();
  }
}

export class SetDurationCall extends ethereum.Call {
  get inputs(): SetDurationCall__Inputs {
    return new SetDurationCall__Inputs(this);
  }

  get outputs(): SetDurationCall__Outputs {
    return new SetDurationCall__Outputs(this);
  }
}

export class SetDurationCall__Inputs {
  _call: SetDurationCall;

  constructor(call: SetDurationCall) {
    this._call = call;
  }

  get duration_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetDurationCall__Outputs {
  _call: SetDurationCall;

  constructor(call: SetDurationCall) {
    this._call = call;
  }
}

export class SetMinimumFeeCall extends ethereum.Call {
  get inputs(): SetMinimumFeeCall__Inputs {
    return new SetMinimumFeeCall__Inputs(this);
  }

  get outputs(): SetMinimumFeeCall__Outputs {
    return new SetMinimumFeeCall__Outputs(this);
  }
}

export class SetMinimumFeeCall__Inputs {
  _call: SetMinimumFeeCall;

  constructor(call: SetMinimumFeeCall) {
    this._call = call;
  }

  get minimumFee_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinimumFeeCall__Outputs {
  _call: SetMinimumFeeCall;

  constructor(call: SetMinimumFeeCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
