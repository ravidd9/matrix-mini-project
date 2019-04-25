const renderer = new Renderer()
// let board = new GoldRush(5,5)
// renderer.render(board)

$("button").on("click", function () {
    let rows = $("#rows").val()
    let cols = $("#cols").val()
    if (rows > 3 && cols > 3) {
        $("#message").css("display", "none")
        let board = new GoldRush(rows, cols)
        renderer.render(board)
        renderer.renderClock(board.score)



        //player1
        $(document).keypress(function (e) {
            if (e.which == 119) {
                board.movePlayer(1, "up")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 115) {
                board.movePlayer(1, "down")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 97) {
                board.movePlayer(1, "left")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 100) {
                board.movePlayer(1, "right")
                renderer.render(board)
            }
        })
        
        
        //player2
        $(document).keypress(function (e) {
            if (e.which == 105) {
                board.movePlayer(2, "up")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 107) {
                board.movePlayer(2, "down")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 106) {
                board.movePlayer(2, "left")
                renderer.render(board)
            }
        })
        $(document).keypress(function (e) {
            if (e.which == 108) {
                board.movePlayer(2, "right")
                renderer.render(board)
            }
        })
    }
})
