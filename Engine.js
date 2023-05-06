export class Engine {
    type = 'v8'
    brand = 'Audi'
    hpPower = 350
    destination = 'kiev'

    constructor(type, brand, hpPower, destination) {
        this.brand = brand;
        this.type = type;
        this.hpPower = hpPower;
        this.destination = destination;
    }
}
