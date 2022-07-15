const Web3=require("web3");
const Mycontract=require('../build/contracts/Bytes1.json');
const init=async()=>{
    
    const web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    
    const netId = await web3.eth.net.getId();
    console.log(netId);
    
   let contract=new web3.eth.Contract(Mycontract.abi,"0xa19Cd8ebbbe0E4d2029360EeAd92A59F18b282Fb");
   const addresses=await web3.eth.getAccounts();
   console.log(addresses[0]);
   //contract.methods.foo(9).send({from:addresses[0]});
   //await contract.methods.setAddress("0x6F0C062916114F96a9e9D1e7018Be97FdE7780f1").send({from:addresses[0]}).then(console.log);
   //await contract.methods.invest().send({from:addresses[1],value:web3.utils.toWei("1","Ether")});
   contract.methods.pushElent().send({from:addresses[0]});
  // contract.methods.balances(addresses[1]).call().then(console.log)
 
  contract.methods.b1().call().then(console.log);
}

init();


