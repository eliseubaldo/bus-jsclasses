class Vehicle {
    constructor(name, x = 20, y = 20, maxspeed = 200, wheels = 4 ) {
      this.maxspeed = maxspeed;
      this.wheels = wheels;
      this.name = name;
      this.x = x;
      this.y = y;
    }
  
    move(direction, amount) {
      let el = document.getElementById(this.name);
  
      switch (direction) {
        case "up":
          this.y -= amount;
          el.style.top = this.y + "px";
          break;
        case "down":
          this.y += amount;
          el.style.top = this.y + "px";
          break;
        case "left":
          this.x -= amount;
          el.style.left = this.x + "px";
          break;
        case "right":
          this.x += amount;
          el.style.left = this.x + "px";
          break;
      }
      console.log(`Moved ${this.name} ${direction}, to x:${this.x}, y:${this.y}`);
    }
  }
  
  export default Vehicle

  
  