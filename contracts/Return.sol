// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Return{
    function Simple(uint a,uint b) public pure returns(uint _a,uint _b){
       _a=a+b;
       _b=a*b;
    }
}