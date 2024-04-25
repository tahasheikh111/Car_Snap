const ImageStorage = artifacts.require("ImageStorage");

module.exports = function(deployer) {
    const feeRecipientAddress = "0x209d854b187677a4aa949899a6f0f966D0f25516"; // Specify the address of the fee recipient
    deployer.deploy(ImageStorage, feeRecipientAddress);
};