# Solana Bootcamp MasterZ 2024 Project

## Overview
This project is designed as a comprehensive solution for the Solana Bootcamp MasterZ 2024 exam. It includes a series of scripts that facilitate various operations on the Solana blockchain, specifically tailored for educational purposes. The project allows users to create a Solana wallet, perform airdrops in a devnet environment, and manage fungible tokens through the Solana Program Library (SPL).

## Features
- **Wallet Creation**: Generate a new Solana wallet for transactional purposes.
- **Token Airdrop**: Facilitate the airdrop of tokens to the newly created wallet on Solana's devnet.
- **Token Management**: Initialize, mint, and transfer fungible tokens using SPL.

## Project Structure
- [keygen.ts](file:///Users/andreafalcon/dev/masterz-solana-bootcamp-exam-2024/keygen.ts#1%2C1-1%2C1): Script to create a new Solana wallet.
- [airdrop.ts](file:///Users/andreafalcon/dev/masterz-solana-bootcamp-exam-2024/airdrop.ts#1%2C1-1%2C1): Script to airdrop tokens to the specified wallet in the devnet.
- [spl_init.ts](file:///Users/andreafalcon/dev/masterz-solana-bootcamp-exam-2024/spl_init.ts#1%2C1-1%2C1): Initializes a new fungible token on Solana.
- [spl_mint.ts](file:///Users/andreafalcon/dev/masterz-solana-bootcamp-exam-2024/spl_mint.ts#1%2C1-1%2C1): Mints a specified amount of the fungible token.
- [spl_transfer.ts](file:///Users/andreafalcon/dev/masterz-solana-bootcamp-exam-2024/spl_transfer.ts#1%2C1-1%2C1): Transfers a portion of the minted tokens to a new wallet.

## Prerequisites
Before running the scripts, ensure you have the following installed:
- Node.js
- Yarn or npm
- Solana CLI tools

## Installation
Clone the repository and install the dependencies:
```bash
git clone <repository-url>
cd <project-directory>
npm install
# Create an empty file to storage wallet secretkey
touch wallet.json
```

## Usage
Each script can be run individually as needed. Here are the commands to execute each script:

### Create a Wallet
```bash
npm run keygen.ts
```

After the script completes, the wallet secret key is shown in the terminal. You have to take the array and store it in the file named `wallet.json`.

### Airdrop Tokens
```bash
npm run airdrop.ts
```

### Initialize SPL Token
```bash
npm run spl_init.ts
```

After the script completes, the Mint Address is shown in the terminal. You have to use it in the next script, inside the `mint` variable and inside the `spl_transfer.ts` file in the `mint` variable.

### Mint SPL Tokens
```bash
npm run spl_mint.ts
```

After the script completes, the Associated Token Account Address is shown in the terminal. You have to use it in the next script, inside the `fromAta` variable.

### Transfer SPL Tokens
```bash
npm run spl_transfer.ts
```

## Dependencies
This project uses some external libraries and tools, which are listed in the `package.json` file. Key dependencies include:
- `@solana/web3.js`: Solana JavaScript API for interacting with the blockchain.
- `@solana/spl-token`: Library for managing SPL tokens.

## Contributing
Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

This README provides a basic template. You can customize it further based on additional details or specific requirements of your project.