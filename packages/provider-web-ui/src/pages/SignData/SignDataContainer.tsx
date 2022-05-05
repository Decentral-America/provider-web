import React, { FC } from 'react';
import { WAVES } from '../../constants';
import { ISignTxProps } from '../../interface';
import { SignDataComponent } from './SignDataComponent';
import { useTxUser } from '../../hooks/useTxUser';
import { getPrintableNumber } from '../../utils/math';
import { DataTransaction } from '@waves/ts-types';

export const SignDataContainer: FC<ISignTxProps<DataTransaction>> = ({
    tx,
    user,
    networkByte,
    onConfirm,
    onCancel,
}) => {
    const { userName, userBalance } = useTxUser(user, networkByte);
    const fee = getPrintableNumber(tx.fee, WAVES.decimals);

    return (
        <SignDataComponent
            userAddress={user.address}
            userName={userName}
            userBalance={`${userBalance} DCC`}
            tx={tx}
            fee={`${fee} DCC`}
            onConfirm={onConfirm}
            onReject={onCancel}
        />
    );
};
