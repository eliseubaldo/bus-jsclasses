import { getElement } from './view-anim-utils.js'
import Grid from './grid.js';
// add new "service" to load promise some passengers for the bus
// random generate map with places to click

const worldclass = getElement('world');
const nVehicles = 2;
const nPassengers = 5;
const nCities = 4;

let grid = new Grid(worldclass, 90, nVehicles, nPassengers, nCities);

console.log('grid:', grid);

// document.getElementById('goButton').addEventListener('click', moveBus);