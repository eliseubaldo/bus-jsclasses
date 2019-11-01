import Grid from './grid.js';
import { getElement, moveVehicle } from './view-anim-utils.js'
import {getTileRowCol} from './utils.js';

class Control {
    constructor(){
        this.selectedBus = {};
        this.initiate();
    }

    initiate() {
        const worldclass = getElement('world');
        const nVehicles = 3;
        const nPassengers = 5;
        const nCities = 8;
        this.grid = new Grid(worldclass, 120, nVehicles, nPassengers, nCities);
        this.attachListeners(this);
    }

    attachListeners(control) {
        // Listeners
        document.addEventListener('click', function (event) {
            if (event.target.matches('.bus')) {
                control.selectBus(event.target);
            }

            if (event.target.matches('.tile')) {
                control.checkMove(event.target);
            }
        }, false);
    
    }
    
    selectBus(bus) {
        
        bus.style.border = "1px dashed blue";
        
        const coords = getTileRowCol(bus);
        this.selectedBus.view = bus;
        this.selectedBus.tile = this.grid.tilesGrid[coords.row][coords.col];

        console.log(this.selectedBus.tile);
    }

    checkMove(targetTile) {
        if (this.selectedBus.tile) {
            console.log('target:',targetTile);
            const coords = getTileRowCol(targetTile);
            // this.selectedBus.view = bus;
            const tile = this.grid.tilesGrid[coords.row][coords.col];
            moveVehicle(this.selectedBus.view, tile);
        }
    }
}

export default Control


