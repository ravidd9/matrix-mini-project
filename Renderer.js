class Renderer {
    renderBoard(board) {
        $("#container").empty()
        let message = `<div id="message">Gold Rush</div>`
        $("#container").append(message)
        $("#message").css("display", "none")
        $("#container").css("grid-template-columns", `repeat(${board[0].length},1fr)`)
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let newClass = this.decideValue(board[i][j])
                let div = `<div class="box"><div class=${newClass}></div></div>`
                $("#container").append(div)
            }
        }
    }

    decideValue(val) {
        if (val == 1) {
            return "p1"
        } else if (val == 2) {
            return "p2"
        } else if (val == "X") {
            return "block"
        } else if (val == "c") {
            return "coin"
        } else if (val == ".") {
            return ""
        }
    }

    renderScore(score) {
        let div = `Score: <br>Player 1: ${score["1"]}
        <br>Player 2: ${score["2"]}`
        $("#score").empty().append(div)
    }

    renderClock(score) {
        let secs = 10
        const hi = function () {
            if (secs > 1) {
                secs--
                $("#clock").text(secs)
            }
            else{
                let message
                score["1"] > score["2"] ? message = "Player 1 Won!" : null
                score["2"] > score["1"] ? message = "Player 2 Won!" : null
                score["1"] == score["2"] ? message = "Draw!" : null
                $(".box").css("display", "none")
                $("#message").css("display", "block")
                $("#message").text(message)
                clearInterval(timer)
            }
            
        }
        let timer = setInterval(hi, 1000)

        // setTimeout(function () {
        //     let message
        //     score["1"] > score["2"] ? message = "Player 1 Won!" : null
        //     score["2"] > score["1"] ? message = "Player 2 Won!" : null
        //     score["1"] == score["2"] ? message = "Draw!" : null
        //     $(".box").css("display", "none")
        //     $("#message").css("display", "block")
        //     $("#message").text() = message

        // }, 10000)
    }

    render(goldRush) {
        this.renderBoard(goldRush.matrix)
        this.renderScore(goldRush.score)
    }
}