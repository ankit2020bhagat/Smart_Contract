const Web3=require("web3");
const Mycontract=require('../build/contracts/funds.json');
const init=async()=>{
    let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    const networkId=await web3.eth.net.getId();
    const deployedNetwork=Mycontract.networks[networkId];
    console.log(deployedNetwork);
    let contract = new web3.eth.Contract(Mycontract.abi,deployedNetwork.address);
    const addresses=await web3.eth.getAccounts();
    console.log(addresses[0]);
    await contract.methods.transfer().send({from:addresses[1],value:web3.utils.toWei("1","Ether")});
    contract.methods.getBalance().call().then(console.log);
    
}
init();