export class Engine {
    type = 'v8'
    brand = 'Audi'
    hpPower = 350
    destination = 'kiev'

    constructor(brand) {
        this.brand = brand;
    }
}


const bmwEngine = new Engine('BMW'); 
const toyotaEngine = new Engine('Toyota'); 
console.log('bmwEngine', bmwEngine); 
console.log('toyotaEngine', toyotaEngine); 
 