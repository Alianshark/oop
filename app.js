import { Engine } from "/Engine.js";
import { AirplaneEngine } from "./AirplaneEngine.js";

const bmwEngine = new Engine('v9', 'BMW', 300, 'nikolaev'); 
const toyotaEngine = new Engine('v10', 'Toyota', 100, 'uzhorod'); 
console.log('bmwEngine', bmwEngine); 
console.log('toyotaEngine', toyotaEngine); 

const airplaneEngineV2 = new AirplaneEngine(5, 'butan')

console.log(airplaneEngineV2)