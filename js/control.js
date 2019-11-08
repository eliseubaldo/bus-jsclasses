import Grid from './grid.js';
import { getElement, moveVehicle, removePassenger, showWellDoneModal, showGameOverModal, updateTimerPanel} from './view-anim-utils.js'
import {getElementRowCol} from './utils.js';

class Control {
    constructor(){
        this.initiate();
    }

    initiate() {
        const worldclass = getElement('world');
        const nVehicles = 3;
        this.nPassengers = 6;
        const nCities = 8;
        this.selectedBus = {};
        this.successfullPassengers = 0;
        this.gameOver = false;
        this.grid = new Grid(worldclass, 120, nVehicles, this.nPassengers, nCities);
        this.attachListeners(this);
        const givenSeconds = (this.nPassengers * 3) + (15); // 3=anim time, 10=extra
        this.countdown(givenSeconds);
    }

    restart() {
        const worldclass = getElement('world');
        worldclass.innerHTML = "";
        worldclass.style = "";
        this.initiate();
    }

    attachListeners(control) {
        // Listeners
        document.addEventListener('click', function (event) {
            if (event.target.matches('.bus')) {
                control.selectToggleBus(event.target);
            }

            if (event.target.matches('.tile')) {
                
                control.checkMove(event.target);
            }

            if (event.target.matches('.city')) {
                control.checkMove(event.target.parentElement);
            }

            if (event.target.matches('.city-sign')) {
                const tileElement = getElement(event.target.getAttribute('data-tile'));
                control.checkMove(tileElement);
            }

            if (event.target.matches('.passenger-destination')) {
                const tileElement = getElement(event.target.getAttribute('data-tile'));
                control.checkMove(tileElement);
            }

            if (event.target.matches('.passenger')) {
                const tileElement = getElement(event.target.getAttribute('data-tile'));
                control.checkMove(tileElement);
            }

            if (event.target.matches('.tryAgainBt')) {
                //control.restart();
                window.location.reload();
            }

        }, false);
    
    }
    
    selectToggleBus(bus) {
        
        if (this.selectedBus.hasOwnProperty('view') && this.selectedBus.view.id === bus.id) {
            bus.style.border = "0";
            this.selectedBus = {};
            return;
        } 
        if (this.selectedBus.hasOwnProperty('view') && this.selectedBus.view.id !== bus.id) {
            this.selectedBus.view.style.border = "0"
        }
        
        bus.style.border = "1px dashed blue";
        
        const coords = getElementRowCol(bus);
        this.selectedBus.view = bus;
        this.selectedBus.gridTile = this.grid.tilesGrid[coords.row][coords.col];

    }

    checkMove(targetViewTile) {
        const coords = getElementRowCol(targetViewTile);
        const gridTargetTile = this.grid.tilesGrid[coords.row][coords.col];

        if (this.selectedBus.gridTile && !gridTargetTile.bus) {
            const moving = moveVehicle(this.selectedBus.view, gridTargetTile, this.selectedBus.gridTile);
            moving.then((pastTile) => this.updateTilesGrid(pastTile, targetViewTile));
            this.selectToggleBus(this.selectedBus.view)
        }
    }
    
    updateTilesGrid(pastTile, nextTile) {
        const nextTileCoords = getElementRowCol(nextTile);
        const bus = pastTile.bus;
        delete this.grid.tilesGrid[pastTile.row][pastTile.col].bus
        const updateTileGrid = this.grid.tilesGrid[nextTileCoords.row][nextTileCoords.col];
        

        const hasPassenger = updateTileGrid.passengers.length > 0 ? updateTileGrid.passengers[0] : false;
        // verificar se tem passageiro -> se sim -> fazer onboarding
        if(!bus.isFull() && hasPassenger && hasPassenger.destination.name === bus.destination) {
            console.log('embarca mano');
            const boardingPassenger = updateTileGrid.passengers.shift();
            bus.passengers.push(boardingPassenger);
            removePassenger(boardingPassenger.name)
        }
        
        // Check if bus dest is in city dest, unboard passenger if any
        const hasCity = updateTileGrid.hasOwnProperty('city') ? updateTileGrid.city : undefined;
        if(hasCity && bus.destination === hasCity.name && bus.hasPassengers()) {
            console.log('im in destination city');
            console.log('desembarca:',bus.passengers);
            this.successfullPassengers += bus.passengers.length;
            bus.passengers = [];

        }
        
        this.grid.tilesGrid[nextTileCoords.row][nextTileCoords.col].bus = bus;

        console.log('atual grid:', this.grid.tilesGrid);
        
         if (this.successfullPassengers === this.nPassengers && this.gameOver === false) {
            clearInterval(this.countdown);
            showWellDoneModal();
         }
      
    }

    countdown(seconds) {
        let countDownDate = new Date().getTime() + 1000 * seconds;
        let control = this;
        // Update the count down every 500 ms
        this.countdown = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            updateTimerPanel('countdown', seconds);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(control.countdown);
                updateTimerPanel('gameover');
                showGameOverModal();
                control.gameOver = true;
            }
        }, 500, control);
    }
    

   
}

export default Control


