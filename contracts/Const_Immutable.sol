// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Const_Immutable{
   string constant Str="abc";
   bytes32 constant Myhash=keccak256("abc");
   uint immutable decimal;
   uint immutable maxbalance;
   address immutable owner=msg.sender;
   constructor(uint _decimal,address _reference){
       decimal=_decimal;
       maxbalance=_reference.balance;
   }
   function isBalanceToHigh(address _other) public view returns(bool){
       return maxbalance>=_other.balance;
   }
}