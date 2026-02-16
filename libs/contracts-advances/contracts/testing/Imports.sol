// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.32;
import '@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol';
import '@originalworks/agreements-contracts/agreements/AgreementFactory.sol';
import '@originalworks/agreements-contracts/agreements/AgreementERC1155.sol';
import '@originalworks/agreements-contracts/agreements/AgreementERC20.sol';
import '@originalworks/agreements-contracts/AgreementRelationsRegistry.sol';
import '@originalworks/agreements-contracts/FallbackVault.sol';
import '@originalworks/agreements-contracts/FeeManager.sol';
import '@originalworks/agreements-contracts/NamespaceRegistry.sol';
import '@originalworks/agreements-contracts/CurrencyManager.sol';
