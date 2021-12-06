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

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProxyImplementationUpdated extends ethereum.Event {
  get params(): ProxyImplementationUpdated__Params {
    return new ProxyImplementationUpdated__Params(this);
  }
}

export class ProxyImplementationUpdated__Params {
  _event: ProxyImplementationUpdated;

  constructor(event: ProxyImplementationUpdated) {
    this._event = event;
  }

  get previousImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

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

  get ejectDust(): boolean {
    return this[3].toBoolean();
  }

  get amount0Min(): BigInt {
    return this[4].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[5].toBigInt();
  }

  get receiver(): Address {
    return this[6].toAddress();
  }

  get feeToken(): Address {
    return this[7].toAddress();
  }

  get resolver(): Address {
    return this[8].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[9].toBigInt();
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

export class EjectLP__canEjectResult {
  value0: Address;
  value1: Address;
  value2: BigInt;

  constructor(value0: Address, value1: Address, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class EjectLP__canEjectInputOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get ejectDust(): boolean {
    return this[2].toBoolean();
  }

  get amount0Min(): BigInt {
    return this[3].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[4].toBigInt();
  }

  get receiver(): Address {
    return this[5].toAddress();
  }

  get owner(): Address {
    return this[6].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[7].toBigInt();
  }

  get startTime(): BigInt {
    return this[8].toBigInt();
  }
}

export class EjectLP extends ethereum.SmartContract {
  static bind(address: Address): EjectLP {
    return new EjectLP("EjectLP", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(id: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  canEject(
    tokenId_: BigInt,
    order_: EjectLP__canEjectInputOrder_Struct,
    feeToken_: Address
  ): EjectLP__canEjectResult {
    let result = super.call(
      "canEject",
      "canEject(uint256,(int24,bool,bool,uint256,uint256,address,address,uint256,uint256),address):(address,address,uint128)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_),
        ethereum.Value.fromAddress(feeToken_)
      ]
    );

    return new EjectLP__canEjectResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt()
    );
  }

  try_canEject(
    tokenId_: BigInt,
    order_: EjectLP__canEjectInputOrder_Struct,
    feeToken_: Address
  ): ethereum.CallResult<EjectLP__canEjectResult> {
    let result = super.tryCall(
      "canEject",
      "canEject(uint256,(int24,bool,bool,uint256,uint256,address,address,uint256,uint256),address):(address,address,uint128)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId_),
        ethereum.Value.fromTuple(order_),
        ethereum.Value.fromAddress(feeToken_)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new EjectLP__canEjectResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt()
      )
    );
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

  nftPositions(): Address {
    let result = super.call("nftPositions", "nftPositions():(address)", []);

    return result[0].toAddress();
  }

  try_nftPositions(): ethereum.CallResult<Address> {
    let result = super.tryCall("nftPositions", "nftPositions():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpgradeToCall extends ethereum.Call {
  get inputs(): UpgradeToCall__Inputs {
    return new UpgradeToCall__Inputs(this);
  }

  get outputs(): UpgradeToCall__Outputs {
    return new UpgradeToCall__Outputs(this);
  }
}

export class UpgradeToCall__Inputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeToCall__Outputs {
  _call: UpgradeToCall;

  constructor(call: UpgradeToCall) {
    this._call = call;
  }
}

export class UpgradeToAndCallCall extends ethereum.Call {
  get inputs(): UpgradeToAndCallCall__Inputs {
    return new UpgradeToAndCallCall__Inputs(this);
  }

  get outputs(): UpgradeToAndCallCall__Outputs {
    return new UpgradeToAndCallCall__Outputs(this);
  }
}

export class UpgradeToAndCallCall__Inputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class UpgradeToAndCallCall__Outputs {
  _call: UpgradeToAndCallCall;

  constructor(call: UpgradeToAndCallCall) {
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

  get ejectDust(): boolean {
    return this[2].toBoolean();
  }

  get amount0Min(): BigInt {
    return this[3].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[4].toBigInt();
  }

  get receiver(): Address {
    return this[5].toAddress();
  }

  get owner(): Address {
    return this[6].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[7].toBigInt();
  }

  get startTime(): BigInt {
    return this[8].toBigInt();
  }
}

export class EjectCall extends ethereum.Call {
  get inputs(): EjectCall__Inputs {
    return new EjectCall__Inputs(this);
  }

  get outputs(): EjectCall__Outputs {
    return new EjectCall__Outputs(this);
  }
}

export class EjectCall__Inputs {
  _call: EjectCall;

  constructor(call: EjectCall) {
    this._call = call;
  }

  get tokenId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get order_(): EjectCallOrder_Struct {
    return this._call.inputValues[1].value.toTuple() as EjectCallOrder_Struct;
  }
}

export class EjectCall__Outputs {
  _call: EjectCall;

  constructor(call: EjectCall) {
    this._call = call;
  }
}

export class EjectCallOrder_Struct extends ethereum.Tuple {
  get tickThreshold(): i32 {
    return this[0].toI32();
  }

  get ejectAbove(): boolean {
    return this[1].toBoolean();
  }

  get ejectDust(): boolean {
    return this[2].toBoolean();
  }

  get amount0Min(): BigInt {
    return this[3].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[4].toBigInt();
  }

  get receiver(): Address {
    return this[5].toAddress();
  }

  get owner(): Address {
    return this[6].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[7].toBigInt();
  }

  get startTime(): BigInt {
    return this[8].toBigInt();
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

export class RetrieveDustCall extends ethereum.Call {
  get inputs(): RetrieveDustCall__Inputs {
    return new RetrieveDustCall__Inputs(this);
  }

  get outputs(): RetrieveDustCall__Outputs {
    return new RetrieveDustCall__Outputs(this);
  }
}

export class RetrieveDustCall__Inputs {
  _call: RetrieveDustCall;

  constructor(call: RetrieveDustCall) {
    this._call = call;
  }

  get token_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RetrieveDustCall__Outputs {
  _call: RetrieveDustCall;

  constructor(call: RetrieveDustCall) {
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

  get ejectDust(): boolean {
    return this[3].toBoolean();
  }

  get amount0Min(): BigInt {
    return this[4].toBigInt();
  }

  get amount1Min(): BigInt {
    return this[5].toBigInt();
  }

  get receiver(): Address {
    return this[6].toAddress();
  }

  get feeToken(): Address {
    return this[7].toAddress();
  }

  get resolver(): Address {
    return this[8].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[9].toBigInt();
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

  get implementationAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ownerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
