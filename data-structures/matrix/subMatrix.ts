function getSubMatrix(matrix: number [][], startRow: number, endRow: number, startCol: number, endCol: number): number [][]{

    const SubMatrix: number [][] = [];

    for (let i = startRow; i <= endRow; i++){
        const row: number[] = [];

        for (let j = startCol; j <= endCol; j++){

            row.push(matrix[i][j]);
        }

        SubMatrix.push(row)
    }

    return SubMatrix
}

 const matrixData1: number [][] =  
 [[ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]]

const SubMatrix1= getSubMatrix(matrixData1, 1, 2, 0, 2);
console.log(SubMatrix1)

const SubMatrix2 = getSubMatrix(matrixData1, 0, 1, 0, 1);
console.log(SubMatrix2)