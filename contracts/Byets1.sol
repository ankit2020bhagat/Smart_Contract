// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Bytes1{
    bytes public b1="abc";
    function pushElent() public{
        b1.push('d');
    }
}