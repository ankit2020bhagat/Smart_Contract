// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Visiblity{
    uint public data;
    function f(uint a) private pure returns(uint b) {
        return a+1;
    }
    function setData(uint a) public{
        data=a;
    }
    function getData() public view returns(uint){
        return data;
    }
    function computation(uint a,uint b) public pure returns(uint ){
        return a+b;
    }
}

contract Visiblity_C is Visiblity{
    uint public val;
    function f() public {
       // Visiblity v=new Visiblity();
        val=computation(3, 5);
    }
}