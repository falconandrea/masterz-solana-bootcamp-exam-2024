import { Keypair } from "@solana/web3.js";

// generate a key pair for solana
const keyPair = Keypair.generate();

console.log("Public key", keyPair.publicKey.toString(), "secret key", keyPair.secretKey);
