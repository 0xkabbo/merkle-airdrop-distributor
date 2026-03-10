# Merkle Airdrop Distributor

A professional-grade solution for high-scale token distributions. Instead of mapping every eligible address on-chain, this system uses a Merkle Root to verify eligibility.

### Why Merkle Trees?
Standard airdrop contracts store a mapping of `address => amount`, which is extremely expensive for thousands of users. A Merkle Airdrop only stores the **Merkle Root**. Users provide a **Merkle Proof** to claim their tokens, shifting the data burden to the claimant.



### Workflow
1. **Generate:** Create a list of eligible addresses and amounts off-chain.
2. **Compute:** Generate a Merkle Tree and extract the Root.
3. **Deploy:** Deploy the contract with the Merkle Root.
4. **Claim:** Users generate their specific proof (off-chain) and call the `claim` function.

### License
MIT
