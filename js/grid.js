import { pickRndTile } from './utils.js';
import Bus from './bus.js';
import { addTiletoView, adjustViewWorldBoundaries } from './view-anim-utils.js';
import Passenger from './passenger.js';
import { fetchRandomPassenger, fetchRandomCityName } from './dataService.js';
import City from './city.js';

class Grid {
    constructor(element, tilesize, vehicles, passengers, cities) {
        this.element = element;
        this.docWidth = this.element.clientWidth;
        this.docHeight = this.element.clientHeight;
        this.tileSize = tilesize;
        this.gridBase = this.calculateGrid(this.docWidth, this.docHeight, this.tileSize);
        this.tilesGrid = this.generateGrid(this.gridBase.rows, this.gridBase.cols, this.element);
        this.width = this.gridBase.cols*this.tileSize;
        this.height = this.gridBase.rows*this.tileSize;
        adjustViewWorldBoundaries(element, this.width, this.height, this.docWidth, this.docHeight);
        this.cities = [];
        this.initiate(vehicles, passengers, cities);
    }

    initiate(vehicles, passengers, cities) {
      for (let c = 0; c < cities; c++) {
        this.generateCities();
      }


      for (let v = 0; v < vehicles; v++) {
        this.addVehicleToGrid(v);
      }

      for (let p = 0; p < passengers; p++) {
        this.addPassengerToGrid(p);
      }

       
    }

    calculateGrid(width, height, tileSize) {
        const rows = Math.floor(height / tileSize);
        const cols = Math.floor(width / tileSize);
        return { rows: rows, cols: cols };
    }

    generateGrid(rows, cols, element) {
        let arr = new Array(rows);
        
        for(let r=0; r<rows; r++) {
          arr[r] = [];
          
            for(let c=0; c<cols; c++) {
              let tileCenterPosition = { 
                x: this.tileSize*c + this.tileSize/2,
                y: this.tileSize*r + this.tileSize/2
              }
              arr[r].push({
                 id:`r${r}-c${c}`,
                 width:this.tileSize,
                 height:this.tileSize,
                 x: this.tileSize*c,
                 y: this.tileSize*r,
                 center: tileCenterPosition,
                 size: this.tileSize,
                 passengers: []
                });
              
               // generate grid in view
               addTiletoView(element, this.tileSize, r, c);
              
            }
        }
        return arr;
      }

      generateCities() {
        const rndTile = pickRndTile(this.tilesGrid);
        let tile = this.tilesGrid[rndTile.row][rndTile.col];
        console.log('cityTile:',rndTile);

        if(!tile.city && !tile.bus){
          tile.city = new City(this.getCityName(), tile);
        } else {
          this.generateCities();
        }
        
      }

      getCityName() {
        const city = fetchRandomCityName();
        const found = this.cities.find((item) => item === city);
        if (!found) {
          console.log('obj city', city);
          console.log('obj found', found);
          this.cities.push(city);
          console.log('city:',city);
          return city;
        } else {
          this.getCityName();
        }
      }

      addVehicleToGrid(index) {
        const rndTile = pickRndTile(this.tilesGrid);
        let tile = this.tilesGrid[rndTile.row][rndTile.col];
        if(!tile.bus){
          console.log('gridBt:',tile);
            tile.bus = new Bus(3, tile, index);
        } else {
          this.addVehicleToGrid(index);
        }
      }

      addPassengerToGrid(index) {
        const rndTile = pickRndTile(this.tilesGrid);
        let tile = this.tilesGrid[rndTile.row][rndTile.col];
        console.log(rndTile);
        if(tile.passengers.length === 0 && !tile.bus){
          let passenger = fetchRandomPassenger();
          passenger.then((passenger) => {
            tile.passengers.push(new Passenger(passenger.name+index, tile))
          })
        } else {
          this.addPassengerToGrid(index);
        }
      }

      
   

}

export default Grid