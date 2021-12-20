import { log, BigInt } from "@graphprotocol/graph-ts";
import { RangeOrder } from "../../generated/schema";
import { LogSetRangeOrder, LogCancelRangeOrder } from "../../generated/RangeOrder/RangeOrder";

export function handleSetRangeOrder(event: LogSetRangeOrder): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());

  if (entity == null) {
    log.debug("LP eject don't exist {}", [event.params.tokenId.toString()]);
    return;
  }

  entity.pool = event.params.pool.toHexString();
  entity.amountIn = event.params.amountIn;
  entity.creator = event.transaction.from.toHexString();

  entity.save();
}

export function handleCancelRangeOrder(event: LogCancelRangeOrder): void {
  let entity = RangeOrder.load(event.params.tokenId.toString());

  if (entity == null) {
    log.debug("LP eject don't exist {}", [event.params.tokenId.toString()]);
    return;
  }

  entity.amount0 = event.params.amount0;
  entity.amount1 = event.params.amount1;

  entity.save();
}
