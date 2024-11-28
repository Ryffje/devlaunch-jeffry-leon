type Mark = "X" | "O"

let board: (Mark | null)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function displayBoard(): void {
    for (const row of board){
        console.log(row.map(cell => cell || ' ' ).join(' | '))
    }

    const winner = checkWinner()

    winner ? console.log(`Player ${winner} wins`) : console.log(`No winner yet`)
 }

 function updateBoard(row: number, column: number, symbol: Mark): void {
    board[row][column] = symbol
 }

 function checkWinner(): Mark | null {
    const winnerLines: (Mark | null )[][] = [
        [board[0][0], board[0][1], board [0][2]],
        [board[1][0], board[1][1], board [1][2]],   
        [board[2][0], board[2][1], board [2][2]],

        [board[0][0], board[1][0], board [2][0]],
        [board[0][1], board[1][1], board [2][1]],
        [board[0][2], board[1][2], board [2][2]],

        [board[0][0], board[1][1], board [2][2]],
        [board[0][2], board[1][2], board [2][0]],
    ]

    for (const line of winnerLines){
        if (line.every(symbol => symbol === "X")) return "X"
        if (line.every(symbol => symbol === "O"))return "O"
    }

    return null
    
}

updateBoard(0,0, "X")
updateBoard(0,1, "O")
updateBoard(1,1, "X")
updateBoard(2,0, "O")
updateBoard(2,2, "X")
displayBoard()


