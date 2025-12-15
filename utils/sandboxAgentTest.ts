import { codingAgent } from "./agent";
import dotenv from "dotenv";
import { codingSandboxAgent } from "./sandboxAgent";

dotenv.config({ path: ".env.local" });

codingSandboxAgent(
  "Add a contributing section to the readme of this project. Use standard format. And create a PR",
  "https://github.com/yashheap/vercel-ship-25-coding-agent",
)
  .then(console.log)
  .catch(console.error);

// // codingSandboxAgent("Tell me how this agent currently works.")
// //   .then(console.log)
// //   .catch(console.error);  

// codingSandboxAgent("Please can you add contributing section to the README.md file")
//   .then(console.log)
//   .catch(console.error);  