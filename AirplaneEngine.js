import { Engine } from "./Engine.js";

export class AirplaneEngine extends Engine {
    numCylindres = 4;
    gas = 'metan';

    constructor(numCylindres, gas) {
        super('v9', 'BMW', 300, 'nikolaev') 
        this.numCylindres = numCylindres;
        this.gas = gas;
    }
}

