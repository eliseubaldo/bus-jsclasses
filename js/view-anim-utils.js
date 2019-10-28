import { fetchUser } from './dataService.js';
import { randonNumber } from './utils.js';

export function move(name, x, y, vehicle) {
    let el = getElement(name);
    console.log('class:',vehicle)

    setTimeout( () => {
        vehicle.x = x;
        vehicle.y = y; 
        boardUnboardPassenger(vehicle);
    }, 2800);

    setTimeout( () => { el.style.top = y + "px" }, 2000);
    setTimeout( () => { el.style.left = x + "px" }, 1000);
  }

function boardUnboardPassenger(vehicle) {
  const board = randonNumber(2); 
  
  if (board === 1 && vehicle.seats > vehicle.passengers.length) {
      let passenger = fetchRandomPassenger();
      passenger.then((passenger) => {
        vehicle.passengers.push(passenger.name);
        showBoardingUnboardingPanel(passenger.name, vehicle, 'board')
      });
  } else if (board === 0 && vehicle.passengers.length > 0){
      showBoardingUnboardingPanel(vehicle.passengers.shift(), vehicle);
  }
 }

function showBoardingUnboardingPanel(passenger, vehicle, action) {
    let message;
    if (action === 'board') {
      message = `Now boarding: ${passenger}`;
    } else {
      message = `Now unboarding: ${passenger}`;
    }

    let el = getElement("passengerModal");
    el.style.display = 'block';
    el.style.height = '36px';
    el.style.padding = '6px';
    el.style.top = vehicle.y - 50 + 'px';
    el.style.left = vehicle.x + 'px';
    el.innerHTML = message;
    
    setTimeout( () => { el.style.height = '0'; el.style.padding = 0; }, 3000);
 
}

function fetchRandomPassenger () {
    const randomId = randonNumber(10)+1;
    const user = fetchUser(randomId);
    return user;
}


export function addTiletoView(element, size, row, col) {
  element.innerHTML += 
    `<div class='tile' id='r${row}-c${col}'
    style='width:${size+'px'}; 
            height:${size+'px'};
            left:${size*col+'px'};
            top:${size*row+'px'}'>
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
  console.log('bust:',tile);
  let world = getElement('world');
  world.innerHTML += `<div class='bus' id='${vehicle.name}'><img src='../images/icons8-bus-100.png'></div>`;
  getElement(vehicle.name).style.top = tile.center.y +'px';
  getElement(vehicle.name).style.left = tile.center.x +'px';

}


export function drawPassenger(passenger, tile) {
  getElement(tile.id).innerHTML += `<div class='passenger' id='${passenger.name}'><img src='../images/Aiga_toiletsq_men.svg'></div>`;
  getElement(passenger.name).style.width = (tile.size * 0.2) + '%';
  getElement(passenger.name).style.top = '10%';
  getElement(passenger.name).style.left = '10%';
}

export function adjustViewWorldBoundaries(element, width, height, docWidth, docHeight) {
  element.style.width = width + 'px';
  element.style.height = height + 'px';
  element.style.left = (docWidth - width) / 2 + "px";
  element.style.top = (docHeight - height) / 2 + "px";
}