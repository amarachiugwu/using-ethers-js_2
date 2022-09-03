// SPDX-License-Identifier:MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract TestToken3 is ERC20, Ownable {
    constructor () ERC20("TestToken3", "TT3"){
        _mint(msg.sender, 1000*10**18);
    }
}

// contract rinkeby address : 0x812b8EEb7F94D5867420A7D8298E3EA0dD7C3014
// contract kovan address : 0x27e860C404c56f390d36eF1775Dc1213A2E98fF4
// contract goerli address : 0x27e860C404c56f390d36eF1775Dc1213A2E98fF4
