
export function moveVehicle(vehicle, gridTargetTile, pastTile) {
  
  vehicle.setAttribute('data-row',gridTargetTile.row);
  vehicle.setAttribute('data-col',gridTargetTile.col);
  console.log('dpois:',vehicle)
  setTimeout( () => { vehicle.style.left = gridTargetTile.center.x + "px" }, 300);
  setTimeout( () => { vehicle.style.top = gridTargetTile.center.y + "px" }, 1300);
  return new Promise((r,j) => { 
    setTimeout( () => {
        r(pastTile);
        //boardUnboardPassenger(vehicle);
    }, 3000)
  });

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
    
    </div>`;
} 

export function getElement(name) {
  return document.getElementById(name);
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
  getElement(vehicle.name).style.minWidth = tile.width /2 +'px';
  getElement(vehicle.name).style.height = tile.height /2 +'px';
}

export function drawCity(city, tile, picture = 'city-svgrepo-com.svg') {
  let world = getElement(tile.id);
  const dirpath = 'images/'
  world.innerHTML += `<div class='city' id='${city.name}'><div class='city-sign' data-tile='${tile.id}'>${city.name}</div></div>`;
  getElement(city.name).style.width = tile.width +'px';
  getElement(city.name).style.height = tile.height +'px';
  getElement(city.name).style.top = 0 +'px';
  getElement(city.name).style.left = tile.width - tile.size +'px';
  getElement(city.name).style.backgroundImage = `url('${dirpath+picture}')`;
}

export function drawPassenger(passenger, tile, destination) {
  let world = getElement('world');
  world.innerHTML += `<div class='passenger zoomIn animated' id='${passenger.name}' data-tile='${tile.id}'>
  <img src='images/Aiga_toiletsq_men.svg' class='passenger-icon' name='${passenger.name}'>
  <div class='passenger-destination' data-tile='${tile.id}'>${destination.name}</div>
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

export function removePassenger(id) {
  let el = getElement(id);
  el.remove();

}

export function showWellDoneModal() {
  let world = getElement('world');
  world.innerHTML += `<div class="resultModal animated fadeIn delay-1s">
  <p class="animated pulse infinite">Well Done!</p>
  <img src="images/welldone.gif" />
  </div>`;
}

export function showGameOverModal() {
  let world = getElement('world');
  world.innerHTML += `<div class="resultModal animated fadeIn delay-1s">
  <p class="animated pulse infinite">You lost!</p>
  <button class="tryAgainBt">try again</button>
  </div>`;
}

export function adjustViewWorldBoundaries(element, width, height, docWidth, docHeight, headerHeight) {
  element.style.width = width + 'px';
  element.style.height = height  + 'px';
  element.style.left = (docWidth - width) / 2 + "px";
  element.style.top = headerHeight + "px";
}

export function adjustTimerPanel(element, docWidth, elementWidth) {
  element.style.left = docWidth/2 - elementWidth/2 + "px";
}

export function updateTimerPanel(situation, content) {
  switch(situation){
    case 'countdown':
        document.getElementById("timeleft").innerHTML = + content;
    break;
    case 'gameover':
        document.getElementById("timeleft").innerHTML = "EXPIRED";
        document.getElementById("timeleft").className = "flash animated infinite";
        document.getElementById("timeleft").style.color = "red";
    break;
    default:;
  }

}
