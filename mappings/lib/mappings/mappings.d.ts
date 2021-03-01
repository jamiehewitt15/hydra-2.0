import { DatabaseManager } from '@dzlzv/hydra-db-utils';
import { Balances, Timestamp } from './generated/types';
export declare function balancesTransfer(db: DatabaseManager, event: Balances.TransferEvent): Promise<void>;
export declare function timestampCall(db: DatabaseManager, call: Timestamp.SetCall): Promise<void>;
