import Bus from './bus.js';
// add new "service" to load promise some passengers for the bus
// random generate map with places to click

  function moveBus() {
  let busname = document.getElementById('busname').value;
  let x = Number(document.getElementById('xcoord').value);
  let y = Number(document.getElementById('ycoord').value);
  
  const singleBus = busArray.find((i) => i.name === busname);

  if(singleBus) {
    singleBus.move(singleBus.name, x, y);
    
  }

}

window.LATM = {
  moveBus: moveBus(),
  initiate: initiate(amount)
}


function initiate(amount) {
  let busArray = [];
  const colorNames = ['Silver', 'Red', 'Wolf', 'Grey', 'Master', 'Amtrak', 'Beagle'];
  const funnyNames = ['Lessard', 'Canada', 'Knight', 'XPO', 'Swift', 'American', 'Lake'];
  rnd = Math.floor(Math.random() * colorNames.length());
  console.log(rnd);


  busArray.push(new Bus("eli", "red", 50, 6, 10));
  busArray.push(new Bus("MTL", "green",100,  250, 50));
  console.log(busArray);
}



  