var ResultStorage = artifacts.require("./ResultStorage.sol");

module.exports = function(deployer) {
    deployer.deploy(ResultStorage);
};