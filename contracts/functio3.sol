// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract function3{
    address addressB;
    function setAddress(address _addressB) external{
         addressB=_addressB;
    }
    function callhelloworld() external view returns(string memory){
           B1 b=B1(addressB);
          return  b.helloworld();
    }
}
contract B1{
    function helloworld() external pure returns(string memory){
        return "Hello_World";
    }
}