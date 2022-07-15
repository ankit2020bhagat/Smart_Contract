const Web3=require("web3");
const Mycontract=require('../build/contracts/Main9.json');
const init=async()=>{
    
    const web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    
    const netId = await web3.eth.net.getId();
    console.log(netId);
    
   let contract=new web3.eth.Contract(Mycontract.abi,"0x8C9211386Dd9647Cc84762811b7d31886267CF52");
   const addresses=await web3.eth.getAccounts();
console.log(addresses[0]);
   contract.methods.foo(9).send({from:addresses[0]});
  
contract.methods.a().call().then(console.log);

 /*await web3.eth.sendTransaction({
    from: '0x2eEA69e45d533DF028a5CC38bbd63B7d0A5B7D6a',
    to: '0xBB5eE71b31586f197e47252Ff19159FEDD7bF5fC',
    value: '1000000000000'
});*/

//await contract.methods.invest().send({from:addresses[0],value:'10000'});
//contract.methods.balaneof().call().then(console.log);
}

init();


