function isDiagonalMatrix(matrix: number[][]): boolean {
    const rows = matrix.length
    const cols = matrix[0].length;

    if (rows !== cols){
        return false
    }

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (i !== j && matrix[i][j] !== 0){
                return false;

            }
        }
    }

    return true
}

const matrix12 = [
[ 4, 0, 0, 0 ],
[ 0, 7, 0, 0 ],
[ 0, 0, 5, 0 ],
[ 0, 0, 0, 1 ]]

console.log(isDiagonalMatrix(matrix12))
