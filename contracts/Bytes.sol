// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.0<0.9.0;
contract Bytes{
    bytes3 public b3;
    bytes2 public b2;
    function setter() public{
        b3="abc";
        b2="a";
    }
}