import { log } from "@graphprotocol/graph-ts";
import { RangeOrder } from "../../generated/schema";
import {LogSetEject, LogEject, LogCancelEject} from "../../generated/EjectLP/EjectLP";
import { extractBigInt, extractAddressFromBytes32, extractBoolean } from "../utils/helpers";

export function handleSetEjectLP(event: LogSetEject): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());
  if (entity != null) {
    log.debug("Duplicate LP eject {}", [event.params.tokenId.toString()]);
    return;
  } else {
    entity = new RangeOrder(event.params.tokenId.toString());
  }
  entity.creator = event.params.sender.toHexString();

  entity.status = "submitted";
  entity.submittedTxHash = event.transaction.hash;
  entity.createdAt = event.block.timestamp;
  entity.updatedAt = event.block.timestamp;
  entity.createdAtBlock = event.block.number;
  entity.updatedAtBlock = event.block.number;
  entity.updatedAtBlockHash = event.block.hash;

  let offset: i32 = 33; // Don't take into account tokenId inside orderParams.
  let orderParams: string = event.params.orderParams.toHexString();
  entity.tickThreshold = extractBigInt(orderParams, offset, 32);
  offset += 32;
  entity.zeroForOne = extractBoolean(orderParams, offset);
  offset += 32;
  entity.ejectDust = extractBoolean(orderParams, offset);
  offset += 32;
  entity.amount0Min = extractBigInt(orderParams, offset, 32);
  offset += 32;
  entity.amount1Min = extractBigInt(orderParams, offset, 32);
  offset += 32;
  entity.receiver = extractAddressFromBytes32(orderParams, offset);
  offset += 32;
  entity.feeToken = extractAddressFromBytes32(orderParams, offset);
  offset += 32;
  entity.resolver = extractAddressFromBytes32(orderParams, offset);
  offset += 32;
  entity.maxFeeAmount = extractBigInt(orderParams, offset, 32);

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
