function interchangeDiagonal(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    const temp = matrix[i][i];
    matrix[i][i] = matrix[i][n - 1 - i];
    matrix[i][n - 1 - i] = temp;
  }
}

// Example usage:
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

interchangeDiagonal(matrix);

console.log(matrix);
// Output: [[3, 2, 1], [4, 5, 6], [9, 8, 7]]
