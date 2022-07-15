const Web3=require("web3");
const Mycontract=require('../build/contracts/function_Overloading.json');
const init=async()=>{
    let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    const networkId=await web3.eth.net.getId();
    const deployedNetwork=Mycontract.networks[networkId];
    console.log(deployedNetwork);
    let contract = new web3.eth.Contract(Mycontract.abi,deployedNetwork.address);
    const addresses=await web3.eth.getAccounts();
    contract.methods.f(23).call().then(console.log);
    contract.methods.f(45,false).call().then(console.log);
    
}
init();