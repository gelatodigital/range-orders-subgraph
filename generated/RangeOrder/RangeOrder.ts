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

export class LogCancelRangeOrder extends ethereum.Event {
  get params(): LogCancelRangeOrder__Params {
    return new LogCancelRangeOrder__Params(this);
  }
}

export class LogCancelRangeOrder__Params {
  _event: LogCancelRangeOrder;

  constructor(event: LogCancelRangeOrder) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount0(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogSetRangeOrder extends ethereum.Event {
  get params(): LogSetRangeOrder__Params {
    return new LogSetRangeOrder__Params(this);
  }
}

export class LogSetRangeOrder__Params {
  _event: LogSetRangeOrder;

  constructor(event: LogSetRangeOrder) {
    this._event = event;
  }

  get tokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amountIn(): BigInt {
    return this._event.parameters[2].value.toBigInt();
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

export class RangeOrder extends ethereum.SmartContract {
  static bind(address: Address): RangeOrder {
    return new RangeOrder("RangeOrder", address);
  }

  WETH9(): Address {
    let result = super.call("WETH9", "WETH9():(address)", []);

    return result[0].toAddress();
  }

  try_WETH9(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH9", "WETH9():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  eject(): Address {
    let result = super.call("eject", "eject():(address)", []);

    return result[0].toAddress();
  }

  try_eject(): ethereum.CallResult<Address> {
    let result = super.tryCall("eject", "eject():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
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

  rangeOrderResolver(): Address {
    let result = super.call(
      "rangeOrderResolver",
      "rangeOrderResolver():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_rangeOrderResolver(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rangeOrderResolver",
      "rangeOrderResolver():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  get eject_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get WETH9_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get rangeOrderResolver_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelRangeOrderCall extends ethereum.Call {
  get inputs(): CancelRangeOrderCall__Inputs {
    return new CancelRangeOrderCall__Inputs(this);
  }

  get outputs(): CancelRangeOrderCall__Outputs {
    return new CancelRangeOrderCall__Outputs(this);
  }
}

export class CancelRangeOrderCall__Inputs {
  _call: CancelRangeOrderCall;

  constructor(call: CancelRangeOrderCall) {
    this._call = call;
  }

  get tokenId_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get params_(): CancelRangeOrderCallParams_Struct {
    return this._call.inputValues[1].value.toTuple() as CancelRangeOrderCallParams_Struct;
  }

  get startTime_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CancelRangeOrderCall__Outputs {
  _call: CancelRangeOrderCall;

  constructor(call: CancelRangeOrderCall) {
    this._call = call;
  }
}

export class CancelRangeOrderCallParams_Struct extends ethereum.Tuple {
  get pool(): Address {
    return this[0].toAddress();
  }

  get zeroForOne(): boolean {
    return this[1].toBoolean();
  }

  get tickThreshold(): i32 {
    return this[2].toI32();
  }

  get amountIn(): BigInt {
    return this[3].toBigInt();
  }

  get receiver(): Address {
    return this[4].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[5].toBigInt();
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

export class SetRangeOrderCall extends ethereum.Call {
  get inputs(): SetRangeOrderCall__Inputs {
    return new SetRangeOrderCall__Inputs(this);
  }

  get outputs(): SetRangeOrderCall__Outputs {
    return new SetRangeOrderCall__Outputs(this);
  }
}

export class SetRangeOrderCall__Inputs {
  _call: SetRangeOrderCall;

  constructor(call: SetRangeOrderCall) {
    this._call = call;
  }

  get params_(): SetRangeOrderCallParams_Struct {
    return this._call.inputValues[0].value.toTuple() as SetRangeOrderCallParams_Struct;
  }
}

export class SetRangeOrderCall__Outputs {
  _call: SetRangeOrderCall;

  constructor(call: SetRangeOrderCall) {
    this._call = call;
  }
}

export class SetRangeOrderCallParams_Struct extends ethereum.Tuple {
  get pool(): Address {
    return this[0].toAddress();
  }

  get zeroForOne(): boolean {
    return this[1].toBoolean();
  }

  get tickThreshold(): i32 {
    return this[2].toI32();
  }

  get amountIn(): BigInt {
    return this[3].toBigInt();
  }

  get receiver(): Address {
    return this[4].toAddress();
  }

  get maxFeeAmount(): BigInt {
    return this[5].toBigInt();
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
