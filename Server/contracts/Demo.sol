// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract Demo{
    uint data;
    function set(uint x) public{
        data = x;
    }
    function get() public view returns(uint){
        return data;
    }
}