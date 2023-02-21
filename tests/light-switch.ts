import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { LightSwitch } from "../target/types/light_switch";

describe("light-switch", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.LightSwitch as Program<LightSwitch>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
