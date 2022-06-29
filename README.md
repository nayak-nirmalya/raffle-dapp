# raffle-dapp
It's a DApp where multiple user can enter a raffle with pre defined Entrance Fee. After a time interval a random user is pciked as winner and gets all Ethers of the contract.

*run below command inside nextjs folder of front-end.*

```bash
npm run dev
npm run build
```



*inside hardhat contract folder in raffle-dapp to simulate lottery winner.*
```bash
npx hardhat node
npx hardhat run .\scripts\mockOffchain.js --network localhost
```
