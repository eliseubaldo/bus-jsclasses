import Bus from './bus.js';

let sptrans = new Bus("eli", "red", 50, 6, 10);
  sptrans.move("right", 78);

let stm = new Bus("MTL", "pink",100,  250, 50);
stm.move("down", 50);

  console.log(sptrans);
  console.log(stm);
  