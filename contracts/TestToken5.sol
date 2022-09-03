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
// contract kovan address : 0xb7Dd2D6f2ed70a37e71b0a46679430DA727c0647
// contract goerli address : 0x348aCbCa8E29BB0789135a3801253eFB936BfC1A