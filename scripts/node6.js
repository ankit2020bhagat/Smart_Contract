const Web3=require("web3");
const Mycontract=require('../build/contracts/Main7.json');
const init=async()=>{
    
    const web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    //const id = await web3.eth.net.getId();
    //const deployedNetwork=Mycontract.network[id];
    //const contract=new web3.eth.contract(Mycontract.abi,deployedNetwork.address);
    const netId = await web3.eth.net.getId();
    console.log(netId);
    //const deployedNetwork = MyContract.networks[address];
   // console.log(deployedNetwork);
   let contract=new web3.eth.Contract(Mycontract.abi,"0x7BC1C3A7300b3dB1001F60A7Aa40d9f2fF4FEdEC");
   contract.methods.owner().call().then(console.log);
   contract.methods.check().send({from:"0x2eEA69e45d533DF028a5CC38bbd63B7d0A5B7D6a"});
  
}
init();
//0x7BC1C3A7300b3dB1001F60A7Aa40d9f2fF4FEdEC