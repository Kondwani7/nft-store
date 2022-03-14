const hre = require("hardhat");

async function main() {
 

  // We get the contract to deploy
  const KondwaNFT = await hre.ethers.getContractFactory("KondwaNFT");
  const kondwaNFT = await KondwaNFT.deploy();

  await kondwaNFT.deployed();

  console.log("KondwaNFT deployed to:", kondwaNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
