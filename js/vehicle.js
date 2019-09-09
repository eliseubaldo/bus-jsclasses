class Vehicle {
    constructor(maxspeed = 200, seats = 5, wheels = 4) {
      this.maxspeed = maxspeed;
      this.seats = seats;
      this.wheels = wheels;
    }
  
    move(direction, amount, name) {
      let el = document.getElementById(name);
  
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
      console.log(`Moved ${name} ${direction}, to x:${this.x}, y:${this.y}`);
    }
  }
  
  export default Vehicle

  
  