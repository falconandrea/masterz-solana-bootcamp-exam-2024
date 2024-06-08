import { Keypair, Connection } from "@solana/web3.js";

import { createMint } from "@solana/spl-token"

import wallet from "./wallet.json"; 

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {
    const mintAddress = await createMint(connection, keypair, keypair.publicKey, null, 6);
    console.log("Mint address:", mintAddress.toBase58());
    // G6t1Fsbj7vruT3uwPp1BLZbXvZxYsyghcwaWzZcmTAxg
})();