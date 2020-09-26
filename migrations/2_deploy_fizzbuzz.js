const FizzBuzz = artifacts.require("FizzBuzz");

module.exports = function (deployer) {
  deployer.deploy(FizzBuzz);
};
