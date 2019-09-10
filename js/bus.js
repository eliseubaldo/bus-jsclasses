import Vehicle from "./vehicle.js";

class Bus extends Vehicle {
  constructor(name, color, seats = 20, x, y) {
      super(name, x, y);
      this.color = color;
      this.seats = seats;
      this.initiateBus();
    }
  
    initiateBus() {
      document.body.innerHTML += `<div class='bus' id='${this.name}'></div>`;
      let el = document.getElementById(this.name);
      el.innerHTML = this.name;
      el.style.backgroundColor = this.color;
      el.style.left = this.x+"px";
      el.style.top = this.y+"px";
    }
  
  }
  
  export default Bus

  
  