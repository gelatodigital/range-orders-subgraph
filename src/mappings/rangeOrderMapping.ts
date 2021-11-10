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
  entity.token0 = event.params.token0.toHexString();
  entity.token1 = event.params.token1.toHexString();
  entity.poolFee = BigInt.fromI32(event.params.fee);
  entity.amountIn = event.params.amountIn;
  entity.creator = event.params.creator.toHexString();

  entity.save();
}
