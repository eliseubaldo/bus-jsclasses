class Bus {
    constructor(name, color, seats, x = 20, y = 20) {
      this.color = color;
      this.seats = seats;
      this.x = x;
      this.y = y;
      this.name = name;
      this.initiateBus();
    }
  
    initiateBus() {
      document.body.innerHTML += `<div class='bus' id='${this.name}'></div>`;
      let el = document.getElementById(this.name);
      el.innerHTML = this.name;
      el.style.backgroundColor = this.color;
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
      console.log(`Moved ${direction}, to x:${this.x}, y:${this.y}`);
    }
  }
  
  export default Bus

  
  