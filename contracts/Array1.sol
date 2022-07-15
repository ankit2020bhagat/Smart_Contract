// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Array1{
    uint[] public arr=[1,2,3,4];
    function myarray() public view returns(uint[] memory ){
        return arr;
    } 
}