import { TPrivateMultiaccountData } from '../interface';
import { libs } from '@decentralchain/waves-transactions';
import usersToJson from './usersToJson';

export const encryptMultiAccountData = (
    users: TPrivateMultiaccountData,
    passowrd: string,
    rounds = 5000
): string => libs.crypto.encryptSeed(usersToJson(users), passowrd, rounds);
