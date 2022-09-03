// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken1 is ERC20, Ownable {
    constructor () ERC20("TestToken1", "TT1"){
        _mint(msg.sender, 1000*10**18);
    }
}

// contract rinkeby address : 0x7637953dbE16f94647F12897644FCc4b1b3F2354
// contract kovan address : 0x348aCbCa8E29BB0789135a3801253eFB936BfC1A
// contract goerli address : 0x348aCbCa8E29BB0789135a3801253eFB936BfC1A