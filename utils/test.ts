import { codingAgent } from "./agent";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

codingAgent("Tell me about this project")
  .then(console.log)
  .catch(console.error);

// codingAgent("Tell me how this agent currently works.")
//   .then(console.log)
//   .catch(console.error);  

// codingAgent("Please can you add contributing section to the README.md file")
//   .then(console.log)
//   .catch(console.error);  