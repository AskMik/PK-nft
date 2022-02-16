async function main() {
    const PKnft = await ethers.getContractFactory("PKnft")
  
    // Start deployment, returning a promise that resolves to a contract object
    const pknft = await PKnft.deploy()
    await pknft.deployed()
    console.log("Contract deployed to address:", pknft.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  