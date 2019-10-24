import * as viewAnimUtils from './view-anim-utils.js';

class Vehicle {
    constructor(name, x = 20, y = 20, maxspeed = 200, wheels = 4, passengers = [] ) {
      this.maxspeed = maxspeed;
      this.wheels = wheels;
      this.name = name;
      this.x = x;
      this.y = y;
      this.passengers = passengers;
    }

    createWheels() {
      viewAnimUtils.createWheels(this.name, this.wheels);
    }

    drawVehicle(vehicle, type) {
      viewAnimUtils.drawVehicle(vehicle, type)
    }
  
    move(name, x, y) { //move and load, unload passenger
      viewAnimUtils.move(name,x,y, this)
    }
  }
  
  export default Vehicle

  
  