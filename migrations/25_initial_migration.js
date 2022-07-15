const Const_Immutable = artifacts.require("Const_Immutable");

module.exports = function (deployer) {
  deployer.deploy(Const_Immutable,45,"0x2eEA69e45d533DF028a5CC38bbd63B7d0A5B7D6a");
};
