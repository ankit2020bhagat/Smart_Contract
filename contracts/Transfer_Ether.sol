// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Transfer_Ether{
    mapping(address=>uint) public balances;
    function invest() external payable{
        if(msg.value<2){
           revert();
        }
        balances[msg.sender]+=msg.value;
    }
    function balanceof() external view returns(uint) {
        return address(this).balance;
        }
}