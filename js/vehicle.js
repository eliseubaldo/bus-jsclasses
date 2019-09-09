class Vehicle {
    constructor(name, maxspeed = 200, seats = 5, wheels = 4) {
      this.maxspeed = maxspeed;
      this.seats = seats;
      this.wheels = wheels;
      this.name = name;
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

  
  