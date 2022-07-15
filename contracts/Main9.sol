// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Main9{
    uint public a;
    function foo(uint _a) external myModifier1(a) myModifier2(a){
            a=_a;
    }
    modifier myModifier1(uint _a){
        require(a==10,'It is not equal to 10');
        _ ;
    }
    modifier myModifier2(uint _a){
        require(a==20,'It is not equal to 20');
        _ ;
    } 
    }