import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { BaseService, WhereInput } from 'warthog';

import { BlockTimestamp } from './block-timestamp.model';

@Service('BlockTimestampService')
export class BlockTimestampService extends BaseService<BlockTimestamp> {
  constructor(@InjectRepository(BlockTimestamp) protected readonly repository: Repository<BlockTimestamp>) {
    super(BlockTimestamp, repository);
  }

  async find<W extends WhereInput>(
    where?: any,
    orderBy?: string,
    limit?: number,
    offset?: number,
    fields?: string[]
  ): Promise<BlockTimestamp[]> {
    let f = fields;
    if (f == undefined) {
      f = [];
    }

    return super.find<W>(where, orderBy, limit, offset, f);
  }
}
