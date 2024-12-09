function isLowerTriangular(matrix: number[][]): boolean {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if(matrix[i].length !== n){
            return false
        }
    }

    for (let i = 0; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (matrix[i][j] !== 0) {
                return false
            }
        }
    }

    return true
}

const matrix1 = [
    [ 1, 0, 0, 0 ],
    [ 1, 4, 0, 0 ],
    [ 4, 6, 2, 0 ],
    [ 1, 4, 7, 6 ]
    ];

    console.log(isLowerTriangular(matrix1))