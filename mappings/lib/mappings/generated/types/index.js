"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeRegistry = void 0;
const tslib_1 = require("tslib");
const types_1 = require("@polkadot/types");
const typeRegistry = new types_1.TypeRegistry();
exports.typeRegistry = typeRegistry;
tslib_1.__exportStar(require("./balances"), exports);
tslib_1.__exportStar(require("./timestamp"), exports);
