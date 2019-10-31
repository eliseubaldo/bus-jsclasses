import {drawCity} from './view-anim-utils.js';

class City {
    constructor(city, tile, isPicked) {
        this.name = city.name;
        this.country = city.country;
        this.x = tile.center.x;
        this.y = tile.center.y;
        this.isPicked = isPicked;
        drawCity(this, tile);
    }
}

export default City