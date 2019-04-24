const renderer = new Renderer()
const board = new GoldRush(5, 5)

renderer.render(board)


//player1
$(document).keypress(function (e) {
    if (e.which == 119) {
        board.movePlayer(1, "up")
        console.log("w")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 115) {
        board.movePlayer(1, "down")
        console.log("s")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 97) {
        board.movePlayer(1, "left")
        console.log("a")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 100) {
        board.movePlayer(1, "right")
        console.log("d")
        renderer.render(board)
    }
})


//player2
$(document).keypress(function (e) {
    if (e.which == 105) {
        board.movePlayer(2, "up")
        console.log("i")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 107) {
        board.movePlayer(2, "down")
        console.log("k")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 106) {
        board.movePlayer(2, "left")
        console.log("j")
        renderer.render(board)
    }
})
$(document).keypress(function (e) {
    if (e.which == 108) {
        board.movePlayer(2, "right")
        console.log("l")
        renderer.render(board)
    }
})
