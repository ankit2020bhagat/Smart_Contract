// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Bytes2{
    bytes public b1="abc";
    function pushElent() public{
        b1.push('d');
    }
    function getElement(uint i) public view returns(bytes1){
        return b1[i];
    }
    function getLength() public view returns(uint){
        return b1.length;
    }
 }