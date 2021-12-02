import { log, BigInt } from "@graphprotocol/graph-ts";
import { RangeOrder } from "../../generated/schema";
import {EjectLP, LogSetEject, LogEject, LogCancelEject} from "../../generated/EjectLP/EjectLP";

export function handleSetEjectLP(event: LogSetEject): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());
  if (entity != null) {
    log.debug("Duplicate LP eject {}", [event.params.tokenId.toString()]);
    return;
  } else {
    entity = new RangeOrder(event.params.tokenId.toString());
  }

  let ejectLP = EjectLP.bind(event.address);

  entity.status = "submitted";
  entity.submittedTxHash = event.transaction.hash;
  entity.createdAt = event.block.timestamp;
  entity.updatedAt = event.block.timestamp;
  entity.createdAtBlock = event.block.number;
  entity.updatedAtBlock = event.block.number;
  entity.updatedAtBlockHash = event.block.hash;

  entity.tickThreshold = BigInt.fromI32(event.params.orderParams.tickThreshold);
  entity.zeroForOne = event.params.orderParams.ejectAbove;
  entity.ejectDust = event.params.orderParams.ejectDust;
  entity.amount0Min = event.params.orderParams.amount0Min;
  entity.amount1Min = event.params.orderParams.amount1Min;
  entity.receiver = event.params.orderParams.receiver.toHexString();
  entity.feeToken = event.params.orderParams.feeToken.toHexString();
  entity.resolver = event.params.orderParams.resolver.toHexString();
  entity.startTime = event.params.startTime;
  entity.expiryTime = entity.startTime.plus(ejectLP.duration());
  entity.maxFeeAmount = event.params.orderParams.maxFeeAmount;

  entity.save();
}

export function handleEjectLP(
  event: LogEject
): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());

  if (entity == null) {
    log.debug("LP eject don't exist {}", [event.params.tokenId.toString()]);
    return;
  }

  entity.status = "executed";
  entity.executedTxHash = event.transaction.hash;
  entity.updatedAt = event.block.timestamp;
  entity.updatedAtBlock = event.block.number;
  entity.updatedAtBlockHash = event.block.hash;

  entity.amount0 = event.params.amount0Out;
  entity.amount1 = event.params.amount1Out;
  entity.feeAmount = event.params.feeAmount;

  entity.save();
}

export function handleCancel(
  event: LogCancelEject
): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());

  if (entity == null) {
    log.debug("LP eject don't exist {}", [event.params.tokenId.toString()]);
    return;
  }

  entity.status = "cancelled";
  entity.cancelledTxHash = event.transaction.hash;
  entity.updatedAt = event.block.timestamp;
  entity.updatedAtBlock = event.block.number;
  entity.updatedAtBlockHash = event.block.hash;

  entity.save();
}
