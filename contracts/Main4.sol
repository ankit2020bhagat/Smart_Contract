// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;
contract Main4{
    uint[] public uintArray=[1,2,3,4];
    string[] public stringArray=["Ankit","kumar","Bhagat"];
    string[] public str1 ;
    uint[][] public Array2d=[[1,2,3],[45,6,7]];
    
    function add_values(string memory _values) public {
         str1.push(_values);
    }
    function getLength()public view returns(uint){
        return uintArray.length;
    }
    
}