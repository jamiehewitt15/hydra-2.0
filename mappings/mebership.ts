import BN from 'bn.js'
import { ApiPromise } from '@polkadot/api'
import { Option } from '@polkadot/types/codec'
import { Codec } from '@polkadot/types/types'
import { Membership as Profile } from '@joystream/types/members'

import { DB, getLogger } from '../../generated/hydra-processor'
import { Block, Network } from '../../generated/graphql-server/src/modules/block/block.model'
import { Membership } from '../../generated/graphql-server/src/modules/membership/membership.model'