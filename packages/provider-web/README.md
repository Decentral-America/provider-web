# ProviderWeb
​
- [ProviderWeb](#providerweb)
  - [Overview](#overview)
  - [Getting Started](#getting-started)
    - [1. Library installation](#1-library-installation)
    - [2. Library initialization](#2-library-initialization)
    - [3. Basic example](#3-basic-example)
  - [Constructor](#constructor)
  - [More examples](#more-examples)
​
<a id="overview"></a>
## Overview
​
ProviderWeb developed by decentral.exchange implements a Signature Provider for [Signer](https://github.com/Decentral-America/signer) protocol library. Signer enables easy deploy dApps based on Decentralchain. Users' encrypted private keys and SEED phrase are stored in decentral.exchange domain of the local browser storage. decentral.exchange and other apps do not have access to the local data as they are stored encrypted.

​
> For now, signing is implemented for all types of transactions except exchange transactions.
​
<a id="getting-started"></a>
## Getting Started
​
### 1. Library installation
​
To install Signer and ProviderWeb libraries use
​
```bash
npm i @decentralchain/signer @waves.exchange/provider-web
```
​
For Windows, use the following format:
```bash
npm i @decentralchain/signer '@waves.exchange/provider-web'
```
​
​
### 2. Library initialization
​
Add library initialization to your app.
​
* For Testnet:
​
   ```js
   import Signer from '@decentralchain/signer';
   import { ProviderWeb } from '@waves.exchange/provider-web';

   const signer = new Signer({
     // Specify URL of the node on Testnet
     NODE_URL: 'https://testnet-node.decentralchain.io'
   });
   signer.setProvider(new ProviderWeb('https://testnet.decentral.exchange/signer'));
   ```
​
* For Mainnet:
​
   ```js
   import Signer from '@decentralchain/signer';
   import { ProviderWeb } from '@waves.exchange/provider-web';

   const signer = new Signer();
   signer.setProvider(new ProviderWeb());
   ```
​
### 3. Basic example
​
Now your application is ready to work with DecentralChain. Let's test it by implementing basic functionality. For example, we could try to authenticate user, get his/her balances and transfer funds.
​
```js
const user = await signer.login();
const balances = await signer.getBalance();
const [broadcastedTransfer] = await signer
  .transfer({amount: 100000000, recipient: 'alias:T:merry'}) // Transfer 1 DCC to alias merry
  .broadcast(); // Promise will resolved after user sign and node response
​
const [signedTransfer] = await signer
  .transfer({amount: 100000000, recipient: 'alias:T:merry'}) // Transfer 1 DCC to alias merry
  .sign(); // Promise will resolved after user sign
```
​
<a id="constructor"></a>
## Constructor
​
```js
new ProviderWeb(clientOrigin: string, logs: boolean);
```
​
Creates an object that features user authentication and transaction signing.
​
You can use optional parameters for debugging.
​
| Parameter | Default value | Description |
| :--- | :--- | :--- |
| clientOrigin | https://decentral.exchange/signer | URL of the ProviderWeb instance. For debugging, you can launch the ProviderWeb instance on your server. |
| logs | false | Logging level. If `true`, all events are logged |
​
**Usage:**
​
```js
var provider = new ProviderWeb(
  'http://localhost:8081/iframe-entry',
  true
);
```
​









