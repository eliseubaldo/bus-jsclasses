import { getElement } from './view-anim-utils.js'
import Grid from './grid.js';
// add new "service" to load promise some passengers for the bus
// random generate map with places to click

const worldclass = getElement('world');

let grid = new Grid(worldclass, 90, 2, 5);

console.log('grid:', grid);

// document.getElementById('goButton').addEventListener('click', moveBus);