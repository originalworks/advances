// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.32;
import '@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol';
import '@advances/contracts-agreements/contracts/agreements/AgreementFactory.sol';
import '@advances/contracts-agreements/contracts/agreements/AgreementERC1155.sol';
import '@advances/contracts-agreements/contracts/agreements/AgreementERC20.sol';
import '@advances/contracts-agreements/contracts/AgreementRelationsRegistry.sol';
import '@advances/contracts-agreements/contracts/FallbackVault.sol';
import '@advances/contracts-agreements/contracts/FeeManager.sol';
import '@advances/contracts-agreements/contracts/NamespaceRegistry.sol';
import '@advances/contracts-agreements/contracts/CurrencyManager.sol';
