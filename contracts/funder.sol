//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Funder{
    uint256 public numOfFunders;

    mapping(uint=>address) private funders;

    receive() external payable{}

    function transfer() external payable{
       funders[numOfFunders]=msg.sender;
    }

    function withdraw(uint withdrawAmount) external{
        require(withdrawAmount<=2000000000000000000, "Cannot withdraw more than 2 Ethers");
        payable(msg.sender).transfer(withdrawAmount);
    }
}


