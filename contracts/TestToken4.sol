// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken4 is ERC20, Ownable {
    constructor () ERC20("TestToken4", "TT4"){
        _mint(msg.sender, 1000*10**18);
    }
}

// contract rinkeby address : 0x13800E8cD613F29aae41c4498889Df47E1312366
// contract kovan address : 0x2b5E53dEf9612Fdd447d2224F1C759F8f5988584
// contract goerli address : 0xb7Dd2D6f2ed70a37e71b0a46679430DA727c0647