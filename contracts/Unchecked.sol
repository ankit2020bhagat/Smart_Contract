// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Unchecked {
    function f(uint a,uint b) public pure returns(uint){
        unchecked {
            return a-b;
        }
    }
    function g(uint a,uint b) public pure returns(uint){
        return a-b;
    }
}