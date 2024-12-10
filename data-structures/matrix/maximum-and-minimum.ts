class Matrix {
    private matrix: number [][];

    constructor (matrix: number [][]){
        this.matrix = matrix
    }

    findMin(): number {
        if (this.matrix.length === 0 || this.matrix[0].length === 0){
            throw new Error (`Matrix is empty`);
        }

        let min = this.matrix[0][0];
        for (let i = 0; i < this.matrix.length; i++){
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] < min){
                    min = this.matrix[i][j];
                }
            }
        }

        return min
    }

    findMax(): number {
        if (this.matrix.length === 0 || this.matrix[0].length === 0){
            throw new Error (`Matrix is empty`);

}

let max = this.matrix[0][0];
for (let i = 0; i < this.matrix.length; i++){
    for (let j = 0; j < this.matrix[i].length; j++){
        if (this.matrix[i][j] > max){
            max = this.matrix[i][j]
        }
    }
}

return max
}}

const matrixData = [
[ 5, 2, 8 ],
[ 9, 1, 6 ],
[ 7, 3, 4 ]
];

const matrix9 = new Matrix (matrixData);

console.log(matrix9.findMin())
console.log(matrix9.findMax())

