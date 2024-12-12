function scalingMatrix (matrix: number [][], scaling: number): number [][]{
return matrix.map(row => row.map(value => value * scaling));
}
 

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];

    const scaling = 2;
    const scaledMatrix = scalingMatrix (matrix3, scaling)
    console.log(scaledMatrix)
