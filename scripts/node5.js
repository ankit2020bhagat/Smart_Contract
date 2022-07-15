const Web3=require("web3");
const Mycontract=require('../build/contracts/Main6.json');
const init=async()=>{
    
    const web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    //const id = await web3.eth.net.getId();
    //const deployedNetwork=Mycontract.network[id];
    //const contract=new web3.eth.contract(Mycontract.abi,deployedNetwork.address);
    const netId = await web3.eth.net.getId();
    console.log(netId);
    //const deployedNetwork = MyContract.networks[address];
   // console.log(deployedNetwork);
   let contract=new web3.eth.Contract(Mycontract.abi,"0xD5d1c809f866e3Ce3cc34387a3d6C1A6Df19Ec6A");
   contract.methods.counEvenNumber().call().then(console.log);
   
   
}
init();
//0xD5d1c809f866e3Ce3cc34387a3d6C1A6Df19Ec6A