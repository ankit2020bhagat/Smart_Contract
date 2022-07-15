// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;
contract Main3{
    uint public count=0;
    function setter() public{
        count+=1;
    }
}