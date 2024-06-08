import { Keypair, Connection, PublicKey } from "@solana/web3.js";

import wallet from "./wallet.json";
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("G6t1Fsbj7vruT3uwPp1BLZbXvZxYsyghcwaWzZcmTAxg");
const fromAta = new PublicKey("CiVncVrVQwdPXUBejAzVuJyF9nQT5w2TJz9MGQm4ERvG");

const to = Keypair.generate();
console.log("To publickey", to.publicKey.toBase58());

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, to.publicKey);
    const toAta = tokenAccount.address;
    console.log("Associated Token Account:", toAta.toBase58());
    const amount = 1e6;
    await transfer(connection, keypair, fromAta, toAta, keypair, amount);

    console.log("Transfer", amount, "from", fromAta.toBase58(), "to", toAta.toBase58());
})();