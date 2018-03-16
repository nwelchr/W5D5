const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TowersOfHanoi {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
  }

  promptMove () {
    console.log(this.stacks);
    reader.question("Enter movement sequence from-to (e.g. 0,2)", function(answer) {
      let startTowerIdx = parseInt(answer[0]);
      let endTowerIdx = parseInt(answer[2]);
      return [startTowerIdx, endTowerIdx];
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (!this.stacks[startTowerIdx]) {
      return false;
    } else if (!this.stacks[endTowerIdx]) {
      return true;
    } else if (this.stacks[startTowerIdx])
  };
}
