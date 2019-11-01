import { pickRndTile, updatedGridCity, getUnpickedCity, getRndDestination} from './utils.js';
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

      // if gridBase rows x cols < nCities,
      for (let c = 0; c < cities; c++) {
        this.generateCities();
      }
      
      for (let v = 0; v < vehicles; v++) {
        this.addVehicleToGrid(v);
      }
      console.log('Cities before:',this.cities);
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
                 row: r,
                 col: c,
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
        
        if(!tile.city){
          const rndCity = this.getCityName();
          const newCity = new City(rndCity, tile, false);
          tile.city = newCity;
          this.cities.push(newCity);
        } else {
          this.generateCities();
        }
        
      }

      getCityName() {
        let city = fetchRandomCityName();
        let found = this.cities.find((item) => item.name === city.name);
        if (found) {
          return this.getCityName();
        }
        return city;
      }

      addVehicleToGrid(index) {
        const rndTile = pickRndTile(this.tilesGrid);
        let tile = this.tilesGrid[rndTile.row][rndTile.col];
        if(!tile.bus && !tile.city){
          const rndCity = getUnpickedCity(this.cities);
          this.cities = updatedGridCity(this.cities, rndCity);
          tile.bus = new Bus(3, tile, index, rndCity);
        } else {
          this.addVehicleToGrid(index);
        }
      }

      addPassengerToGrid(index) {
        let passenger = fetchRandomPassenger();
        passenger.then((passenger) => {
          const rndTile = pickRndTile(this.tilesGrid);
          let tile = this.tilesGrid[rndTile.row][rndTile.col];
          if(tile.passengers.length === 0 && !tile.bus){
            tile.passengers.push(new Passenger(passenger.name+index, tile, getRndDestination(this.cities)))
          } else {
            this.addPassengerToGrid(index)
          }
        })
      }

}

export default Grid