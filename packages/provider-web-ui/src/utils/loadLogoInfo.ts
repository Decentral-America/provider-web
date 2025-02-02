import { TAssetDetails } from '@decentralchain/node-api-js/es/api-node/assets';
import { Long } from '@waves/ts-types';
import { curry } from 'ramda';
import { DetailsWithLogo } from '../interface';

export const loadLogoInfo = curry(
    (
        networkByte: number,
        data: Array<TAssetDetails<Long>>
    ): Promise<Array<DetailsWithLogo>> =>
        Promise.all(
            data.map((asset) => {
                const network =
                    String.fromCharCode(networkByte) === '!' ? '' : 'testnet.';
                const fetchLogoUrl = `https://${network}decentral.exchange/static/icons/assets/${asset.assetId}.svg`;

                return fetch(fetchLogoUrl).then((response) => {
                    if (response.ok) {
                        return { ...asset, logo: fetchLogoUrl };
                    }

                    return asset;
                });
            })
        )
);
