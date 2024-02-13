function getNeighbors(row, col, matrix) {
  const neighbors = [];

  if (row > 0 && matrix[row - 1][col] === 1) {
    const top = [row - 1, col];
    neighbors.push(top);
  }

  if (row > 0 && col < matrix[row].length - 1 && matrix[row - 1][col + 1] === 1) {
    const topRight = [row - 1, col + 1];
    neighbors.push(topRight);
  }

  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1) {
    const right = [row, col + 1];
    neighbors.push(right);
  }

  if (row < matrix.length - 1 && col < matrix[row].length - 1 && matrix[row + 1][col + 1] === 1) {
    const bottomRight = [row + 1, col + 1];
    neighbors.push(bottomRight);
  }

  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    const bottom = [row + 1, col];
    neighbors.push(bottom);
  }

  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1) {
    const bottomLeft = [row + 1, col - 1];
    neighbors.push(bottomLeft);
  }

  if (col > 0 && matrix[row][col - 1] === 1) {
    const left = [row, col - 1];
    neighbors.push(left);
  }

  if (row > 0 && col > 0 && matrix[row - 1][col - 1] === 1) {
    const topLeft = [row - 1, col - 1];
    neighbors.push(topLeft);
  }

  return neighbors;
}

function countIslands(matrix) {
  const visited = new Set();
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const current = [i, j];
      const key = current.join(',');

      if (!visited.has(key) && matrix[i][j] === 1) {
        count++;
        const queue = [current];

        while (queue.length > 0) {
          const [row, col] = queue.shift();
          const neighbors = getNeighbors(row, col, matrix);

          for (const neighbor of neighbors) {
            const [nr, nc] = neighbor;
            const neighborKey = neighbor.join(',');

            if (!visited.has(neighborKey) && matrix[nr][nc] === 1) {
              queue.push(neighbor);
              visited.add(neighborKey);
            }
          }
        }
      }
    }
  }

  return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 1, 0, 1],
//   [0, 1, 1, 0, 1]
// ];

// const matrix2 = [
//   [1, 1, 1, 0, 1],
//   [0, 0, 0, 0, 1],
//   [1, 0, 0, 1, 0],
// ];

// console.log(countIslands(matrix)); // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
