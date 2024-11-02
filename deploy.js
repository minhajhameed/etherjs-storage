const ethers = require('ethers');
const fs = require('fs-extra');

async function main() {
  let provider = new ethers.providers.JsonRpcProvider("HTTP://172.20.80.1:7545");
  const wallet = new ethers.Wallet("0x9912e84200fe7c03e73a6cf6eddbd78287c7016123053da6a0e0de0a84a0ec0e", provider)
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf-8");
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying . . .");
  const contract = await contractFactory.deploy();
  console.log(contract);
}



main()
  .then(() => ProcessingInstruction.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
