"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestampCall = exports.balancesTransfer = void 0;
const tslib_1 = require("tslib");
const transfer_model_1 = require("../generated/graphql-server/src/modules/transfer/transfer.model");
const block_timestamp_model_1 = require("../generated/graphql-server/src/modules/block-timestamp/block-timestamp.model");
const bn_js_1 = tslib_1.__importDefault(require("bn.js"));
const start = Date.now();
let total = 0;
async function balancesTransfer(db, event) {
    const transfer = new transfer_model_1.Transfer();
    transfer.from = Buffer.from(event.data.accountIds[0].toHex());
    transfer.to = Buffer.from(event.data.accountIds[1].toHex());
    transfer.value = event.data.balance.toBn();
    transfer.block = event.ctx.blockNumber;
    transfer.comment = `Transferred ${transfer.value} from ${transfer.from} to ${transfer.to}`;
    transfer.insertedAt = new Date();
    await db.save(transfer);
}
exports.balancesTransfer = balancesTransfer;
async function timestampCall(db, call) {
    benchmarkExtrinsics();
    const block = new block_timestamp_model_1.BlockTimestamp();
    block.timestamp = call.args.now.toBn();
    block.blockNumber = new bn_js_1.default(call.ctx.blockNumber);
    console.log(`New block ${block.blockNumber} at ${block.timestamp}`);
    await db.save(block);
}
exports.timestampCall = timestampCall;
function benchmarkExtrinsics() {
    const millis = Date.now() - start;
    total = total + 1;
    if (total % 10 === 0) {
        console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
        console.log(`Everage time ms: ${millis / total}, total events: ${total}`);
    }
}
