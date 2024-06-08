import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { mintTo, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const mint = new PublicKey("G6t1Fsbj7vruT3uwPp1BLZbXvZxYsyghcwaWzZcmTAxg");

(async () => {
    const tokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
    const amount = 10e6;
    const ata = tokenAccount.address;
    console.log("Associated Token Account:", ata.toBase58());
    // CiVncVrVQwdPXUBejAzVuJyF9nQT5w2TJz9MGQm4ERvG
    await mintTo(connection, keypair, mint, ata, keypair.publicKey, amount);
    console.log("Minted", amount, "to", ata.toBase58());
})();