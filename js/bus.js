import Vehicle from "./vehicle.js";
import { generateColorName, generateVehicleName } from './utils.js';

class Bus extends Vehicle {
  constructor(seats = 20, tile, index, destination) {
      super(name = generateVehicleName()+index, tile.x, tile.y, '180', 6);
      this.color = generateColorName();
      this.seats = seats;
      this.destination = destination.name;
      super.drawVehicle(this, 'bus', tile)
    }
  
  
  }
  
  export default Bus

  
  