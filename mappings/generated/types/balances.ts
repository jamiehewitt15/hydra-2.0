import { createTypeUnsafe } from "@polkadot/types/create";
import { SubstrateEvent, SubstrateExtrinsic } from "@dzlzv/hydra-common";
import { Codec } from "@polkadot/types/types";
import { typeRegistry } from ".";

import { AccountId, Balance } from "@polkadot/types/interfaces";

export namespace Balances {
  /**
   *  Transfer succeeded (from, to, value).
   *
   *  Event parameters: [AccountId, AccountId, Balance, ]
   */
  export class TransferEvent {
    public readonly expectedParamTypes = ["AccountId", "AccountId", "Balance"];

    constructor(public readonly ctx: SubstrateEvent) {}

    get data(): Transfer_Params {
      return new Transfer_Params(this.ctx);
    }

    validateParams(): boolean {
      if (this.expectedParamTypes.length !== this.ctx.params.length) {
        return false;
      }
      let valid = true;
      this.expectedParamTypes.forEach((type, i) => {
        if (type !== this.ctx.params[i].type) {
          valid = false;
        }
      });
      return valid;
    }
  }

  class Transfer_Params {
    constructor(public readonly ctx: SubstrateEvent) {}

    get accountIds(): { [key: number]: AccountId } {
      return {
        0: createTypeUnsafe<AccountId & Codec>(typeRegistry, "AccountId", [
          this.ctx.params[0].value
        ]),
        1: createTypeUnsafe<AccountId & Codec>(typeRegistry, "AccountId", [
          this.ctx.params[1].value
        ])
      };
    }

    get balance(): Balance {
      return createTypeUnsafe<Balance & Codec>(typeRegistry, "Balance", [
        this.ctx.params[2].value
      ]);
    }
  }
}
