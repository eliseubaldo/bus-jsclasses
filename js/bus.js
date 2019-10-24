import Vehicle from "./vehicle.js";

class Bus extends Vehicle {
  constructor(name, color, seats = 20, x, y) {
      super(name, x, y, '180', 6);
      this.color = color;
      this.seats = seats;
      this.initiateBus();
    }
  
    initiateBus() {
      super.drawVehicle(this, 'bus')
      super.createWheels();
      }
  
  }
  
  export default Bus

  
  