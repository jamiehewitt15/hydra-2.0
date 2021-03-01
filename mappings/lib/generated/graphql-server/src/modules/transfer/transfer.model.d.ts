/// <reference types="node" />
import { BaseModel } from 'warthog';
import BN from 'bn.js';
export declare class Transfer extends BaseModel {
    from: Buffer;
    to: Buffer;
    value: BN;
    comment?: string;
    block: number;
    insertedAt: Date;
    constructor(init?: Partial<Transfer>);
}
