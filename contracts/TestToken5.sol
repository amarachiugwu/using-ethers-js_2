// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken5 is ERC20, Ownable {
    constructor () ERC20("TestToken5", "TT5"){
        _mint(msg.sender, 1000*10**18);
    }
}

// contract rinkeby address : 0xe8aC99B07F4122b8C4c78f8f5dF0a885F9F2B512