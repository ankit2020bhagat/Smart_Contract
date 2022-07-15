// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract funds {
    uint256 public numOfFunders;

    mapping(uint256 => address) public funders;

    receive() external payable {}

    function transfer() external payable {
        funders[numOfFunders] = msg.sender;
        numOfFunders++;
    }

    function withdraw(uint256 withdrawAmount) external {
        require(
            withdrawAmount <= 2000000000000000000,
            "Cannot withdraw more than 2 ether"
        );
        payable(msg.sender).transfer(withdrawAmount);
    }
    function getBalance() public view returns(uint){
        return address(this).balance;
    }
}