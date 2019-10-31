import { getElement } from './view-anim-utils.js'
import Grid from './grid.js';

const worldclass = getElement('world');
const nVehicles = 3;
const nPassengers = 5;
const nCities = 8;

let grid = new Grid(worldclass, 120, nVehicles, nPassengers, nCities);

console.log('grid:', grid);

// document.getElementById('world').addEventListener('click', event => {
//     event.preventDefault();
//     console.log('ji')
// });



// let x = document.getElementsByClassName('bus');//.addEventListener('click', grid.moveBus(event));
// console.log(x)
// for (let key in x) {
//     console.log(x[key]);
//     //x[key].addEventListener('click', grid.moveBus(event));
// }

// (element => {
//     
// });