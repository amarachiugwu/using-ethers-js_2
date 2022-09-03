// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken2 is ERC20, Ownable {
    constructor () ERC20("TestToken2", "TT2"){
        _mint(msg.sender, 1000*10**18);
    }
}

// contract rinkeby address : 0xd07C703243092887C2970eb13Db8c0079dC5e3D4
// contract kovan address : 0x813698d5B01d766FBc0e8A2170e940e7005EAd92
// contract goerli address : 0x813698d5B01d766FBc0e8A2170e940e7005EAd92