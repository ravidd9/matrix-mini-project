class Matrix {
    constructor(rows, cols) {
        this.matrix = []
        this.generateMatrix(rows, cols)

    }

    generateMatrix(numRows, numColumns) {
        let num = 1
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                this.matrix[r].push(num++)
            }
        }
    }

    get(rowNum, colNum) {
        return this.matrix[rowNum][colNum]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    alter(r, c, v) {
        this.matrix[r][c] = v
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }

    printRow(rowNum) {
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i])
        }
    }

    findCoordinate(value) {
        let coor = {
            x: null,
            y: null
        }
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (this.matrix[i][j] == value) {
                    coor.x = j
                    coor.y = i
                    return coor
                }
            }
        }
    }
}

// module.exports = Matrix
