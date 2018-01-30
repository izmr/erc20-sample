const MySampleToken = artifacts.require('./MySampleToken.sol')

module.exports = (deployer) => {
  let initialSupply = 50000e18
  deployer.deploy(MySampleToken, initialSupply, {
    gas: 2000000
  })
}
