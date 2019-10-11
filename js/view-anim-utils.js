import { fetchUser } from './dataService.js';

function getElement(name) {
    return document.getElementById(name);
}

export function createWheels(name, wheels) {
    let el = getElement(name);
    for (let index = 0, w = 10; index < wheels; index++, w = w + 15) {
      el.innerHTML += `<div class='wheel' style='left:${w+'px'}'></div>`;
    }
  }

export function move(name, x, y, vehicle) {
    let el = getElement(name);
    console.log('class:',vehicle)

    setTimeout( () => { 
        boardUnboardPassenger(vehicle);
    }, 2800);

    setTimeout( () => { el.style.top = y + "px" }, 2000);
    setTimeout( () => { el.style.left = x + "px" }, 1000);
  }

function boardUnboardPassenger(vehicle) {
  const randomId = Math.floor(Math.random()*10);
  const user = fetchUser(randomId);
  user.then((result) => showBoardingUnboardingPanel(result.name, vehicle.x, vehicle.y));
  

}

function showBoardingUnboardingPanel(passenger, x, y) {
  let el = getElement("passengerModal");
  el.style.display = 'block';
  el.style.top = y + 'px';
  el.style.left = x + 'px';

  //vehicle.passengers.push(passenger)
}