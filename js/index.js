import Bus from './bus.js';
// add new "service" to load promise some passengers for the bus
// random generate map with places to click

const worldclass = document.getElementById('world')
const WORLD = {
  width: worldclass.clientWidth - 70,
  height: worldclass.clientHeight - 90
}

console.log('world size:', WORLD);

document.getElementById('goButton').addEventListener('click', moveBus);

initiate(3);

  function moveBus() {
  let busname = document.getElementById('busname').value;
  let x = Number(document.getElementById('xcoord').value);
  let y = Number(document.getElementById('ycoord').value);
  
  const singleBus = busArray.find((i) => i.name === busname);

  if(singleBus) {
    singleBus.move(singleBus.name, x, y);
    
  }

}



function initiate(amount) {
  let busArray = [];

  for (let index = 0; index < amount; index++) {
    busArray.push(new Bus(generateVehicleName(), generateColorName(), 50, generateRndPos('width'), generateRndPos('height')));
    
  }
  
  // busArray.push(new Bus(generateVehicleName(), "red", 50, 6, 10));
  // busArray.push(new Bus("MTL", "green",100,  250, 50));
  // console.log(busArray);
}

function generateVehicleName() {
  const colorNames = ['Silver', 'Red', 'Wolf', 'Grey', 'Master', 'Amtrak', 'Beagle'];
  const funnyNames = ['Lessard', 'Canada', 'Knight', 'XPO', 'Swift', 'American', 'Lake'];
  return pickRndFromArray(funnyNames) + ' ' + pickRndFromArray(colorNames)
}

function generateColorName() {
  const colorNames = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','DarkOrange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DimGrey','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed ','Indigo ','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSlateGrey','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','RebeccaPurple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','SlateGrey','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen']
  return pickRndFromArray(colorNames);
}

function generateRndPos(coordinate){
  return Math.floor(Math.random() * WORLD[coordinate])
}

function pickRndFromArray(array){
  return array[Math.floor(Math.random() * array.length)];
} 