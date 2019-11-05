import { drawVehicle } from './view-anim-utils.js';

class Vehicle {
    constructor(name, x = 20, y = 20, maxspeed = 200, wheels = 4, passengers = [] ) {
      this.maxspeed = maxspeed;
      this.wheels = wheels;
      this.name = name;
      this.x = x;
      this.y = y;
      this.passengers = passengers;
    }

    drawVehicle(vehicle, type, tile) {
      drawVehicle(vehicle, type, tile)
    }

  }
  
  export default Vehicle

  
  