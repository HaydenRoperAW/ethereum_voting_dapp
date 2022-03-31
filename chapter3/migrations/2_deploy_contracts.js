

var Voting = artifacts.require("../contracts/Voting.sol");
module.exports = function(deployer) {
  
  deployer.deploy(Voting, 1000, web3.utils.toWei('0.1', 'ether'), [web3.utils.fromAscii('Rama'), web3.utils.fromAscii('Nick'), web3.utils.fromAscii('Jose')]);
};
