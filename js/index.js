import Bus from './bus.js';
// add new "service" to load promise some passengers for the bus
// random generate map with places to click

window.moveBus = function moveBus() {
  let busname = document.getElementById('busname').value;
  let x = Number(document.getElementById('xcoord').value);
  let y = Number(document.getElementById('ycoord').value);
  
  const singleBus = busArray.find((i) => i.name === busname);

  if(singleBus) {
    singleBus.move(singleBus.name, x, y);
    
  }

}


  let busArray = [];
  busArray.push(new Bus("eli", "red", 50, 6, 10));
  busArray.push(new Bus("MTL", "green",100,  250, 50));
  console.log(busArray);




  