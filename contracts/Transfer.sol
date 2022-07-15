// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Transfer{
    function getAddress() public view returns(address){
        return address(this);
    }
    function invest() external payable{

    }
    function balaneof() public view returns(uint){
        return address(this).balance;
    } 
}