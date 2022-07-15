const Web3=require("web3");
const Mycontract=require('../build/contracts/Return.json');
const init=async()=>{
     let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
     const networkId=await web3.eth.net.getId();
     console.log(networkId);
     const deployedNetwork=Mycontract.networks[networkId];
     console.log(deployedNetwork);
     let contract=new web3.eth.Contract(Mycontract.abi,deployedNetwork.address);
     const address = await web3.eth.getAccounts();
     console.log(address[0]);
     contract.methods.Simple(3,4).call().then(console.log);
     
}
init();
