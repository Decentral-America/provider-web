import { curry } from 'ramda';
import {
    fetchCalculateFee,
    TFeeInfo,
} from '@decentralchain/node-api-js/es/api-node/transactions';
import { SignerTx } from '@decentralchain/signer';

export const loadFeeByTransaction = curry(
    (base: string, tx: SignerTx): Promise<SignerTx> =>
        // TODO
        fetchCalculateFee(base, tx as any)
            .then((info: TFeeInfo) => ({ ...tx, fee: info.feeAmount }))
            .catch(() => ({ ...tx }))
);
