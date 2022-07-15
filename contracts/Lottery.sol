// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Lottery {
    address public manager;
    address[] public players;
    constructor(){
        manager=msg.sender;
    }
    function invest() external payable{
            
    }
}