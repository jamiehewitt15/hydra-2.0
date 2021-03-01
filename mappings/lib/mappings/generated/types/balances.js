"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balances = void 0;
const create_1 = require("@polkadot/types/create");
const _1 = require(".");
var Balances;
(function (Balances) {
    /**
     *  Transfer succeeded (from, to, value).
     *
     *  Event parameters: [AccountId, AccountId, Balance, ]
     */
    class TransferEvent {
        constructor(ctx) {
            this.ctx = ctx;
            this.expectedParamTypes = ["AccountId", "AccountId", "Balance"];
        }
        get data() {
            return new Transfer_Params(this.ctx);
        }
        validateParams() {
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
    Balances.TransferEvent = TransferEvent;
    class Transfer_Params {
        constructor(ctx) {
            this.ctx = ctx;
        }
        get accountIds() {
            return {
                0: create_1.createTypeUnsafe(_1.typeRegistry, "AccountId", [
                    this.ctx.params[0].value
                ]),
                1: create_1.createTypeUnsafe(_1.typeRegistry, "AccountId", [
                    this.ctx.params[1].value
                ])
            };
        }
        get balance() {
            return create_1.createTypeUnsafe(_1.typeRegistry, "Balance", [
                this.ctx.params[2].value
            ]);
        }
    }
})(Balances = exports.Balances || (exports.Balances = {}));
