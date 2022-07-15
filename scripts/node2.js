const Web3=require("web3");
const Mycontract=require('../build/contracts/Main2.json');
console.log(Mycontract);
console.log(Mycontract.abi);
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
   
    let contract=new web3.eth.Contract([
        {
          "constant": false,
          "inputs": [],
          "name": "setbook",
          "outputs": [],
          "payable": false,
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [],
          "name": "getbookid",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ],"0xCB1Ca84D38635f7BCbA571ef5E959AD8A6BDb90a");
      contract.methods.getbookid().call().then(console.log);
      contract.methods.setbook().send({from:"0x2eEA69e45d533DF028a5CC38bbd63B7d0A5B7D6a"});
}
init();