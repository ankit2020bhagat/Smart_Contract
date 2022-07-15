// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Main6{
    
    uint[] public num=[1,2,3,4,5,6,7,8,9];
    function counEvenNumber() public view returns(uint){
        uint count=0;
        for(uint i=0;i<num.length;i++){
            if(isEven(num[i])){
               count+=1;
            }
        }
        return count;
    }
    function isEven(uint _num) public pure returns(bool){
          if(_num%2==0){
              return true;
          }
          else{
              return false;
          }
    }
    
    
}