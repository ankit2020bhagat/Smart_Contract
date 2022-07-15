const Web3=require("web3");
const Mycontract=require('../build/contracts/Main4.json');
const init=async()=>{
    console.log("hello");
    const web3= new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
    //const id = await web3.eth.net.getId();
    //const deployedNetwork=Mycontract.network[id];
    //const contract=new web3.eth.contract(Mycontract.abi,deployedNetwork.address);
    const netId = await web3.eth.net.getId();
    console.log(netId);
    //const deployedNetwork = MyContract.networks[address];
   // console.log(deployedNetwork);
   let contract=new web3.eth.Contract(Mycontract.abi,"0xA1CEBB0Ce5da05820dCf7c104Bb338feEBB1BADF");
   contract.methods.str1(0).call().then(console.log);
   contract.methods.add_values("Ankit").send({from:"0x2eEA69e45d533DF028a5CC38bbd63B7d0A5B7D6a"});
  // contract.methods.str1(1).call().then(console.log);
   contract.methods.getLength().call().then(console.log);
   contract.methods.Array2d(0,1).call().then(console.log);
   contract.methods.uintArray(2).call().then(console.log);
}
init();
//0x963A5f14E1035830bb2d4218F7bacB2BdD2D0Ec4s