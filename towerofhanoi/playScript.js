const towerGame= require("./game");

// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let game = new towerGame();
game.run(function() {
  console.log('You won!');
  // reader.close();
});
