// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Main7{
    address public owner;
    constructor(){
        owner=msg.sender;
    }
    function check() public view returns(bool){
         return (owner==msg.sender);
    }
}