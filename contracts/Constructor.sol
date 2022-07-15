// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Constructor{
    uint public count;
    constructor(uint new_count){
        count=new_count;
    }
}