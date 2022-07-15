const Constructor= artifacts.require("Constructor");

module.exports = function (deployer) {
  deployer.deploy(Constructor,6);
};
