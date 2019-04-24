// const Matrix = require('./Matrix')

class GoldRush extends Matrix {
    constructor(rows, cols) {
        super()
        this.score = {
            1: 0,
            2: 0
        }
        this.loadBoard(rows, cols)
    }

    loadBoard(rows, cols) {
        for (let r = 0; r < rows; r++) {
            this.matrix.push([])
            for (let c = 0; c < cols; c++) {
                this.matrix[r].push(".")
            }
        }
        this.alter(0,0,1)
        this.alter(rows - 1,cols - 1,2)
        this.generateBlocks(rows,cols)
        this.generateCoins(rows, cols)
    }
    
    generateBlocks(rows,cols){
        for (let blocks = 0; blocks < rows; blocks++) {
            let x = Math.floor(Math.random() * cols)
            let y = Math.floor(Math.random() * rows)
            if (this.get(y, x) == ".") {
                this.alter(y, x, "X")
            } else {
                blocks--
            }
        }
    }

    generateCoins(rows, cols) {
        for (let coins = 0; coins < (rows * cols / 2); coins++) {
            let x = Math.floor(Math.random() * cols)
            let y = Math.floor(Math.random() * rows)
            if (this.get(y, x) == ".") {
                this.alter(y, x, "c")
            } else {
                coins--
            }
        }
    }

    movePlayer(player, direction) {
        let coor = this.findCoordinate(player)
        if (this.isLegalMove(coor, direction)) {
            this.checkScoreMove(coor, direction, player)
            if (direction == "down") {
                this.alter(coor.y + 1, coor.x, player)
            } else if (direction == "up") {
                this.alter(coor.y - 1, coor.x, player)
            } else if (direction == "right") {
                this.alter(coor.y, coor.x + 1, player)
            } else if (direction == "left") {
                this.alter(coor.y, coor.x - 1, player)
            }
            this.alter(coor.y, coor.x, ".")
        }
    }

    checkScoreMove(coor, direction, player) {
        // if (((direction == "down") && (this.get(coor.y + 1, coor.x) == "c")) ||
        //     ((direction == "up") && (this.get(coor.y - 1, coor.x) == "c")) ||
        //     ((direction == "left") && (this.get(coor.y, coor.x - 1) == "c")) ||
        //     ((direction == "right") && (this.get(coor.y, coor.x + 1) == "c")))
        if(this.getMoveValue(coor, direction) == "c"){
            this.score[player] += 10
            console.log(this.score)
        }
    }

    getMoveValue(coor, direction){
        let newCoor = {y: coor.y, x: coor.x}
        direction == "up" ? newCoor.y-- : null
        direction == "down" ? newCoor.y++ : null
        direction == "right" ? newCoor.x++ : null
        direction == "left" ? newCoor.x-- : null
        return this.get(newCoor.y, newCoor.x)
    }

    isLegalMove(coor, direction) {
        if ((coor.y == 0 && direction == "up") || (coor.y == this.matrix.length - 1 && direction == "down") ||
            (coor.x == 0 && direction == "left") || (coor.x == this.matrix[0].length - 1 && direction == "right")) {
            return false
        } else if (this.getMoveValue(coor, direction) == 1 || this.getMoveValue(coor, direction) == 2 || this.getMoveValue(coor, direction) == "X") {
            return false
        } else {
            return true
        }
    }
}

// const board = new GoldRush(5, 5)
// board.print()
// console.log("--------------------------")
// board.movePlayer(1, "down") //this method should be defined inside of GoldRush
// board.movePlayer(2, "left")
// // board.print()
// board.print()
// console.log("--------------------------")