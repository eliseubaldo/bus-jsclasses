export function pickRndFromArray(array){
    return array[randonNumber(array.length)];
  }
  
export function randonNumber(range) {
    return Math.floor(Math.random()*range);
}

export function pickRndTile(grid) {
  const rndRow = randonNumber(grid.length); 
  const rndCol = randonNumber(grid[rndRow].length);
  return {
    tile: grid[rndRow][rndCol],
    row: rndRow,
    col: rndCol
  };
}

export function updatedGridCity(array, city) {
  const index = array.findIndex((item) => item.name === city.name);
  array[index].isPicked = true;
  return array;
}

export function getUnpickedCity(array) {
  const rndCity = array.find((city) => city.isPicked === false);
  return rndCity;
}

export function getRndDestination(array) {
  const rndDestination = pickRndFromArray(array);
  return rndDestination.isPicked === true ? rndDestination : getRndDestination(array);
}

export function generateVehicleName() {
  const surnames = ['silver', 'wing', 'wolf', 'grey', 'master', 'hound', 'beagle', 'bird', 'eagle', 'smart', 'speed'];
  const funnyNames = ['Jones', 'Canada', 'Knight', 'Horse', 'Swift', 'American', 'Lake', 'Road'];
  return pickRndFromArray(funnyNames) + ' ' + pickRndFromArray(surnames)
}

export function generateColorName() {
  const colorNames = ['AliceBlue','AntiqueWhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','BlanchedAlmond','Blue','BlueViolet','Brown','BurlyWood','CadetBlue','Chartreuse','Chocolate','Coral','CornflowerBlue','Cornsilk','Crimson','Cyan','DarkBlue','DarkCyan','DarkGoldenRod','DarkGray','DarkGrey','DarkGreen','DarkKhaki','DarkMagenta','DarkOliveGreen','DarkOrange','DarkOrchid','DarkRed','DarkSalmon','DarkSeaGreen','DarkSlateBlue','DarkSlateGray','DarkSlateGrey','DarkTurquoise','DarkViolet','DeepPink','DeepSkyBlue','DimGray','DimGrey','DodgerBlue','FireBrick','FloralWhite','ForestGreen','Fuchsia','Gainsboro','GhostWhite','Gold','GoldenRod','Gray','Grey','Green','GreenYellow','HoneyDew','HotPink','IndianRed ','Indigo ','Ivory','Khaki','Lavender','LavenderBlush','LawnGreen','LemonChiffon','LightBlue','LightCoral','LightCyan','LightGoldenRodYellow','LightGray','LightGrey','LightGreen','LightPink','LightSalmon','LightSeaGreen','LightSkyBlue','LightSlateGray','LightSlateGrey','LightSteelBlue','LightYellow','Lime','LimeGreen','Linen','Magenta','Maroon','MediumAquaMarine','MediumBlue','MediumOrchid','MediumPurple','MediumSeaGreen','MediumSlateBlue','MediumSpringGreen','MediumTurquoise','MediumVioletRed','MidnightBlue','MintCream','MistyRose','Moccasin','NavajoWhite','Navy','OldLace','Olive','OliveDrab','Orange','OrangeRed','Orchid','PaleGoldenRod','PaleGreen','PaleTurquoise','PaleVioletRed','PapayaWhip','PeachPuff','Peru','Pink','Plum','PowderBlue','Purple','RebeccaPurple','Red','RosyBrown','RoyalBlue','SaddleBrown','Salmon','SandyBrown','SeaGreen','SeaShell','Sienna','Silver','SkyBlue','SlateBlue','SlateGray','SlateGrey','Snow','SpringGreen','SteelBlue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','WhiteSmoke','Yellow','YellowGreen']
  return pickRndFromArray(colorNames);
}