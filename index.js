import { connectRPC } from "./rpc.client.js";
import { runSecuritySimulation } from "./security.simulator.js";
import { NETWORK, CONTRACT_ADDRESS } from "./network.config.js";

console.log("Web3 Security Audit Toolkit");
console.log("Network:", NETWORK);
console.log("Contract:", CONTRACT_ADDRESS);

const provider = connectRPC();
runSecuritySimulation(provider);
