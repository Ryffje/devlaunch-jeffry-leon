function isUpperTriangle(matrix: number [][]): boolean {
    const n = matrix.length;

    for (let i = 1; i < n; i ++){
        for (let j = 0; j < i; j++){
            if (matrix[i][j] !== 0){

                return false
            }
        }
    }

    return true
}

const matrix6 = [
    [1, 2, 3],
    [0, 5, 6],
    [0, 0, 9]
];

console.log(isUpperTriangle(matrix6))