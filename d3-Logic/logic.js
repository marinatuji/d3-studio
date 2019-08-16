const matrix =
  [[1, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 1, 0, 1],
  [0, 1, 9, 1],
  [1, 1, 1, 1]]

const walked = [[false, false, false, false],
[false, false, false, false],
[false, false, false, false],
[false, false, false, false],
[false, false, false, false]]

function findTarget(matrix) {
  const target = {};

  matrix.map((line, x) => {
    line.map((element, y) => {
      if (element === 9) {
        target.x = x;
        target.y = y;
      }
    })
  })
  return target;
}
console.log(findTarget(matrix))

function virtualRobot(matrix, target) {
  const queue = [];
  const first = { x: 0, y: 0 }
  queue.push(first);
  walked[first.x][first.y] = true;

  while (queue.size > 0) {
    const targetCandidate = queue.shift();
    
    if(targetCandidate.x === target.x && targetCandidate.y === target.y) {
      return targetCandidate;
    }

    

  }




}

