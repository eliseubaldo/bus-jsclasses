
class City {
    constructor(city, tile) {
        console.log('City o:', city, tile);
        this.name = city.name;
        this.country = city.country;
        this.x = tile.center.x;
        this.y = tile.center.y;
    }
}

export default City