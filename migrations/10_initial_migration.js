const Transfer_Ether= artifacts.require("Transfer_Ether");

module.exports = function (deployer) {
  deployer.deploy(Transfer_Ether);
};
