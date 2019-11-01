import { randonNumber } from './utils.js';

export function moveVehicle(vehicle, targetTile) {
  console.log('move tile:',vehicle);
    setTimeout( () => {
        
        //boardUnboardPassenger(vehicle);
    }, 2800);

    setTimeout( () => { vehicle.style.top = targetTile.center.y + "px" }, 2000);
    setTimeout( () => { vehicle.style.left = targetTile.center.x + "px" }, 1000);
  }

// function boardUnboardPassenger(vehicle) {
//   const board = randonNumber(2); 
  
//   if (board === 1 && vehicle.seats > vehicle.passengers.length) {
//       let passenger = fetchRandomPassenger();
//       passenger.then((passenger) => {
//         vehicle.passengers.push(passenger.name);
//         showBoardingUnboardingPanel(passenger.name, vehicle, 'board')
//       });
//   } else if (board === 0 && vehicle.passengers.length > 0){
//       showBoardingUnboardingPanel(vehicle.passengers.shift(), vehicle);
//   }
//  }

// function showBoardingUnboardingPanel(passenger, vehicle, action) {
//     let message;
//     if (action === 'board') {
//       message = `Now boarding: ${passenger}`;
//     } else {
//       message = `Now unboarding: ${passenger}`;
//     }

//     let el = getElement("passengerModal");
//     el.style.display = 'block';
//     el.style.height = '36px';
//     el.style.padding = '6px';
//     el.style.top = vehicle.y - 50 + 'px';
//     el.style.left = vehicle.x + 'px';
//     el.innerHTML = message;
    
//     setTimeout( () => { el.style.height = '0'; el.style.padding = 0; }, 3000);
 
// }


export function addTiletoView(element, size, row, col) {
  element.innerHTML += 
    `<div class='tile' id='r${row}-c${col}'
    style='width:${size+'px'}; 
            height:${size+'px'};
            left:${size*col+'px'};
            top:${size*row+'px'}'
            data-row='${row}' data-col='${col}'>
    ${row}/${col}
    </div>`;
} 

export function getElement(name) {
  return document.getElementById(name);
}

export function createWheels(name, wheels) {
  let el = getElement(name);
  for (let index = 0, w = 10; index < wheels; index++, w = w + 15) {
    el.innerHTML += `<div class='wheel' style='left:${w+'px'}'></div>`;
  }
}

export function drawVehicle(vehicle, type, tile) {
  switch(type) {
    case 'bus':
      drawBus(vehicle, tile)
    break;
    default:;
  }
}

function drawBus(vehicle, tile) {
  let world = getElement('world');
  world.innerHTML += `<div class='bus' id='${vehicle.name}' data-row='${tile.row}' data-col='${tile.col}'>
  <div class='bus-sign'>${vehicle.destination}</div>
  `;
  getElement(vehicle.name).style.top = tile.center.y +'px';
  getElement(vehicle.name).style.left = tile.center.x +'px';
  getElement(vehicle.name).style.width = tile.width /2 +'px';
  getElement(vehicle.name).style.height = tile.height /2 +'px';
}

export function drawCity(city, tile) {
  let world = getElement('world');
  world.innerHTML += `<div class='city' id='${city.name}'><img src='../images/city-svgrepo-com.svg' class='city-img'><div class='city-sign'>${city.name}</div></div>`;
  getElement(city.name).style.width = tile.width /2 +'px';
  getElement(city.name).style.height = tile.height /2 +'px';
  getElement(city.name).style.top = tile.center.y +'px';
  getElement(city.name).style.left = tile.x +'px';
}

export function drawPassenger(passenger, tile, destination) {
  let world = getElement('world');
  world.innerHTML += `<div class='passenger' id='${passenger.name}'>
  <img src='../images/Aiga_toiletsq_men.svg' class='passenger-icon' name='${passenger.name}'>
  <div class='passenger-destination'>${destination.name}</div>
  </div>`;
  let passengerEl = getElement(passenger.name);
  passengerEl.style.width = tile.size + 'px';
  passengerEl.style.top = tile.y  + 'px';
  passengerEl.style.left = tile.x + 'px';

  let passengerIcon = getElement(passenger.name).querySelector(`img[name='${passenger.name}']`);
  
  passengerIcon.style.width = tile.size * 0.2 + 'px';
  passengerIcon.style.top = tile.y + 2 + 'px';
  passengerIcon.style.left = tile.x + 2 + 'px';

  let passengerDestination = getElement(passenger.name).querySelector(`div[class='passenger-destination']`);
  passengerDestination.style.width = tile.size * 0.90 + 'px';

}

export function adjustViewWorldBoundaries(element, width, height, docWidth, docHeight) {
  element.style.width = width + 'px';
  element.style.height = height + 'px';
  element.style.left = (docWidth - width) / 2 + "px";
  element.style.top = (docHeight - height) / 2 + "px";
}