import Vehicle from "./vehicle.js";
import { generateColorName, generateVehicleName } from './utils.js';

class Bus extends Vehicle {
  constructor(seats = 20, x, y) {
      super(name = generateVehicleName(), x, y, '180', 6);
      this.color = generateColorName();
      this.seats = seats;
      this.initiateBus();
    }
  
    initiateBus() {
      super.drawVehicle(this, 'bus')
      super.createWheels();
      }
  
  }
  
  export default Bus

  
  