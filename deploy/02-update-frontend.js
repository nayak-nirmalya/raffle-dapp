const { ethers, network } = require("hardhat")
const fs = require("fs")

const FRONT_END_ADDRESSES_FILE = "../nextjs-lottery/constants/contractAddress.json"
const FRONT_END_ABI_FILE = "../nextjs-lottery/constants/abi.json"

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("Updating Front-End...")

        updateContractAddresses()
        updateAbi()

        console.log("Front-End Updated!")
    }
}

async function updateAbi() {
    const raffle = await ethers.getContract("Raffle")
    fs.writeFileSync(FRONT_END_ABI_FILE, raffle.interface.format(ethers.utils.FormatTypes.json))
}

async function updateContractAddresses() {
    const raffle = await ethers.getContract("Raffle")
    const chainId = network.config.chainId.toString()
    const contractAddress = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE, "utf-8"))

    if (chainId in contractAddress) {
        if (!contractAddress[chainId].includes(raffle.address)) {
            contractAddress[chainId].push(raffle.address)
        }
    } else {
        contractAddress[chainId] = [raffle.address]
    }

    fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(contractAddress))
}

module.exports.tags = ["all", "frontend"]
