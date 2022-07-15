const Web3=require("web3");
const Mycontract=require('../build/contracts/Transfer_Ether.json');
const init=async()=>{
    
    let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    const networkId=await web3.eth.net.getId();
    const deployedNetwork=Mycontract.networks[networkId];
    console.log(deployedNetwork);
    let contract = new web3.eth.Contract(Mycontract.abi,deployedNetwork.address);
   const addresses=await web3.eth.getAccounts();
   console.log(addresses[0]);
   //contract.methods.foo(9).send({from:addresses[0]});
  
   await contract.methods.invest().send({from:addresses[1],value:web3.utils.toWei("1","Ether")});
   contract.methods.balanceof().call().then(console.log);
   contract.methods.balances(addresses[1]).call().then(console.log)
}

init();


