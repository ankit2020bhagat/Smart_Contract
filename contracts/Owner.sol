// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Owner{
    address payable public owner;
    constructor(){
        owner=payable(msg.sender);
    }

}
contract Destructible is Owner{
  function destroy() public virtual  {
      require(msg.sender==owner,"Only Manager");
      selfdestruct(owner);
  }
}
abstract contract Config{
    function lookup(uint id) public virtual returns(address adr);
}
abstract contract NameReg{
    function register(bytes32 name) public virtual;
    function unregister() public virtual;
}

contract Named is Owner ,Destructible{
   constructor(bytes32 name){
   Config config=Config(0xD5f9D8D94886E70b06E474c3fB14Fd43E2f23970);
   NameReg(config.lookup(1)).register(name);
   }
   function destroy() public virtual override{
       require(msg.sender==owner);
       Config config=Config(0xD5f9D8D94886E70b06E474c3fB14Fd43E2f23970);
      NameReg(config.lookup(1)).unregister();
       Destructible.destroy();
   }
}
contract PriceFeed is Owner,Destructible,Named("GoldFeed"){
     function updateInfo(uint newInfo) public{
         require(msg.sender==owner);
         info=newInfo;
     }
     function destroy()public override(Destructible,Named){
         Named.destroy();
     }
     function get( ) public view returns(uint r){
         return info;
     }
     uint info;
}