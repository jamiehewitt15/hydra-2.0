import { BaseModel } from 'warthog';
import BN from 'bn.js';
export declare class BlockTimestamp extends BaseModel {
    blockNumber: BN;
    timestamp: BN;
    constructor(init?: Partial<BlockTimestamp>);
}
