export function pickRndFromArray(array){
    return array[randonNumber(array.length)];
  }
  
export function randonNumber(range) {
    return Math.floor(Math.random()*range);
}