import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

(async () => {
  try {
    // Get signature for airdrop transaction
    const airdropSignature = await connection.requestAirdrop(
      keypair.publicKey,
      1 * LAMPORTS_PER_SOL
    );
    console.log(
      `Airdrop Signature: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`
    );

  } catch (error) {
    console.log("Error during Airdrop", error);
  }
})();
