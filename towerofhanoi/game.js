const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class TowersOfHanoi {
  constructor() {
    this.stacks = [[3, 2, 1], [], []];
  }

  run(completionCallback) {
    this.promptMove((startTowerIdx, endTowerIdx) => {
      // let startTowerIdx = parseInt(answer[0]);
      // let endTowerIdx = parseInt(answer[2]);
      if (this.isValidMove(startTowerIdx, endTowerIdx)) {
        this.move(startTowerIdx, endTowerIdx);
      } else {
        console.log("Invalid move!");
      }
      if (this.isWon()) {
        completionCallback();
      } else {
        this.promptMove(this.func);
      }
    });

  }

  promptMove (func) {
    this.print();
    reader.question("Enter movement sequence from-to (e.g. 0,2)", function(answer) {
      func(answer);
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (!this.stacks[startTowerIdx]) {
      return false;
    } else if (!this.stacks[endTowerIdx]) {
      return true;
    } else if (this.stacks[startTowerIdx][startTowerIdx.length-1] > this.stacks[endTowerIdx][endTowerIdx.length-1]) {
      return false;
    } else {
      return true;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    let disk = this.stacks[startTowerIdx].pop();
    this.stacks[endTowerIdx].push(disk);
  }

  print() {
    JSON.stringify(this.stacks);
  }

  isWon() {
    console.log(this.stacks);
    if ((this.stacks[1].length === 3) || (this.stacks[2].length === 3)) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = TowersOfHanoi;
