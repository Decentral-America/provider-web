import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [reactRefresh()],
    server: {
        port: 3000
    },
    optimizeDeps: {
        include: [
            '@decentralchain/node-api-js/es/api-node/addresses',
            '@decentralchain/node-api-js/es/api-node/alias',
            '@decentralchain/node-api-js/es/api-node/assets',
            '@decentralchain/node-api-js/es/api-node/transactions',
            '@decentralchain/node-api-js/es/api-node/utils',
            '@decentralchain/node-api-js/es/tools/adresses/availableSponsoredBalances',
            '@decentralchain/node-api-js/es/tools/adresses/getAssetIdListByTx',
            '@decentralchain/node-api-js/es/constants',
        ],
        exclude: [
            'node-fetch'
        ]
    },
    build: {
        commonjsOptions: {
            ignore: ['node-fetch']
        }
    }
});
