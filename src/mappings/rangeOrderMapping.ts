import { log, BigInt } from "@graphprotocol/graph-ts";
import { RangeOrder } from "../../generated/schema";
import { LogSetRangeOrder } from "../../generated/RangeOrder/RangeOrder";

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
