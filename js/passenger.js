import { drawPassenger } from './view-anim-utils.js';

class Passenger {
    constructor(name, tile, destination){
        this.name = name;
        this.x = tile.center.x;
        this.y = tile.center.y;
        this.destination = destination;
        drawPassenger(this, tile, destination);
    }

}

export default Passenger