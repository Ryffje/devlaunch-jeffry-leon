function miniMatrix(matrix1: number [][]): number [][] {
const transposedminiMatrix: number[][] = [];

   for (let j = 0; j < matrix1[0].length; j++) {
    const otherRow: number[] = [];
   for (let i = 0; i < matrix1.length; i++){
        otherRow.push(matrix1[i][j]);
    }

    transposedminiMatrix.push(otherRow)
}

    return transposedminiMatrix;

}

const matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const transposedminiMatrix = miniMatrix(matrix);
console.log(transposedminiMatrix)


function sumArrays(array1: number[][], array2: number[][]): number [][]{
    const sumMatrix: number[][] = [];

    for(let i = 0; i < array1.length; i ++){
        const newRow: number[] = [];
        for(let j = 0; j < array1[0].length; j++){
            newRow.push(array1[i][j] + array2[i][j]);
        }

        sumMatrix.push(newRow);
    }

    
    return sumMatrix;
}

const array1: number [][] = [
    [2, 5, 3],
    [9, 6, 8],
    [7, 1, 4],
    ];

const array2: number [][] = [
    [2, 5, 3],
    [9, 6, 8],
    [7, 1, 4],
    ];
    
const sum = sumArrays(array1, array2);
console.log(sum)    




