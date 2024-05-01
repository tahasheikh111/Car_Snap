const ImageStorage = artifacts.require("ImageStorage");

module.exports = function(deployer) {
    const feeRecipientAddress = "be091Ad69d6BD4305F94c6f54706F37AC05D5171"; // Specify the address of the fee recipient
    deployer.deploy(ImageStorage, feeRecipientAddress);
};