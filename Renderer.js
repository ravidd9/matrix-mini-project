class Renderer{
    renderBoard(board){
        $("#container").empty()
        $("#container").css("grid-template-columns", `repeat(${board[0].length},1fr)`)
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let newClass = this.decideValue(board[i][j])
                let div = `<div class="box"><div class=${newClass}></div></div>`
                $("#container").append(div)
            }
        }
    }
    
    decideValue(val){
        if(val == 1){
            return "p1"
        }else if(val == 2){
            return "p2"
        }else if(val == "X"){
            return "block"
        }else if(val == "c"){
            return "coin"
        }else if(val == "."){
            return ""
        }
    }
    
    renderScore(score){
        let div = `<div class="score">player 1: ${score["1"]}
        <br>player 2: ${score["2"]}</div>`
        $("#container").append(div)

    }

    render(goldRush){
        this.renderBoard(goldRush.matrix)
        this.renderScore(goldRush.score)
    }
}