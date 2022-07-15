const Web3=require("web3");

const Mycontract=require('../build/contracts/Const_Immutable.json');
const init=async()=>{
    const web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    const networkId=await web3.eth.net.getId();
    console.log(networkId);
    const deployedNetwork=Mycontract.networks[networkId];
    console.log(deployedNetwork);
    const addresses=await web3.eth.getAccounts();
    let contract=new web3.eth.Contract(Mycontract.abi,deployedNetwork.address);
    contract.methods.isBalanceToHigh(addresses[2]).call().then(console.log);
}
init();