// Function to transpose a matrix
function transposeMatrix(matrix: number[][]): number[][] {
    // Get the number of rows and columns of the input matrix
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create a new matrix with dimensions swapped
    let transposedMatrix: number[][] = [];

    // Loop through the original matrix and swap rows with columns
    for (let i = 0; i < cols; i++) {
        // Create a new row for the transposed matrix
        transposedMatrix[i] = [];
        for (let j = 0; j < rows; j++) {
            // Assign the value from the original matrix (matrix[j][i]) to the transposed matrix
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    // Return the transposed matrix
    return transposedMatrix;
}

// Example usage:
const originalMatrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
console.table(originalMatrix);

const transposed = transposeMatrix(originalMatrix);

console.log("Transposed Matrix:");
console.table(transposed);