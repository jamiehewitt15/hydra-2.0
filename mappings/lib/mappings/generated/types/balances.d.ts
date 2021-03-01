import { SubstrateEvent } from "@dzlzv/hydra-common";
import { AccountId, Balance } from "@polkadot/types/interfaces";
export declare namespace Balances {
    /**
     *  Transfer succeeded (from, to, value).
     *
     *  Event parameters: [AccountId, AccountId, Balance, ]
     */
    export class TransferEvent {
        readonly ctx: SubstrateEvent;
        readonly expectedParamTypes: string[];
        constructor(ctx: SubstrateEvent);
        get data(): Transfer_Params;
        validateParams(): boolean;
    }
    class Transfer_Params {
        readonly ctx: SubstrateEvent;
        constructor(ctx: SubstrateEvent);
        get accountIds(): {
            [key: number]: AccountId;
        };
        get balance(): Balance;
    }
    export {};
}
