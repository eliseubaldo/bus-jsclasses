class Vehicle {
    constructor(name, x = 20, y = 20, maxspeed = 200, wheels = 4 ) {
      this.maxspeed = maxspeed;
      this.wheels = wheels;
      this.name = name;
      this.x = x;
      this.y = y;
      
    }

    createWheels() {
      let el = document.getElementById(this.name);
      for (let index = 0, w = 10; index < this.wheels; index++, w = w + 15) {
        el.innerHTML += `<div class='wheel' style='left:${w+'px'}'></div>`;
      }
    }
  
    move(name, x, y) {
      let el = document.getElementById(name);
  
      setTimeout( function() { el.style.top = y + "px" }, 2000);
      setTimeout( () => { el.style.left = x + "px" }, 1000);  
    }
  }
  
  export default Vehicle

  
  