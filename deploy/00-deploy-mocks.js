const { network, ethers } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config.js")

const BASE_FEE = ethers.utils.parseEther("0.25")
const GAS_PRICE_LINK = 1e9

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // const chaidId = network.config.chainId
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks Deployed!")
        log("-----------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]

// 15:20:08 - Last Video TimeStamp
/**
npx hardhat deploy
Nothing to compile
Local network detected! Deploying mocks...
deploying "VRFCoordinatorV2Mock" (tx: 0x11b9dfa83e5a81e783d8d818bd6499fa1504a937113eca5f07b8cfafe70751ea)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3 with 1797707 gas
Mocks Deployed!
-----------------------------------
deploying "Raffle" (tx: 0xe66de42d9021b0d4275e0f1b87c93ecdcdf100d9e48db4566cfbece9621c10fd)...: deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 1197024 gas
------------------------------------------------
deploying "Raffle" (tx: 0xb5d5d3d11ff04cef2aa973b07db8b8c4d7cee98d1914b191d0f95761971c1e6e)...: deployed at 0x3888d6cab93938A596dD24259Aea537dd1AB0963 with 1220487 gas


-- new_verified_contract
npx hardhat deploy --network rinkeby
Nothing to compile
reusing "Raffle" at 0x3888d6cab93938A596dD24259Aea537dd1AB0963
Verifying...
Verifying contract...
Nothing to compile

Successfully submitted source code for contract
contracts/Raffle.sol:Raffle at 0x3888d6cab93938A596dD24259Aea537dd1AB0963
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Raffle on Etherscan.
https://rinkeby.etherscan.io/address/0x3888d6cab93938A596dD24259Aea537dd1AB0963#code
------------------------------------------------
*/
