import { drawPassenger } from './view-anim-utils.js';

class Passenger {
    constructor(name, tile){
        this.name = name;
        this.x = tile.center.x;
        this.y = tile.center.y;
        drawPassenger(this, tile);
        // this.destination = this.getDestination();
    }

}

export default Passenger