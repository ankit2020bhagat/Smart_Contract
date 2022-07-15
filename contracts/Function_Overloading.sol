// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract function_Overloading{
    function f(uint _i) public pure returns(uint _out){
       _out=_i;
    }
    function f(uint _i,bool _b1) public pure returns(uint _out){
        if(_b1)
        _out=_i;
    }
}