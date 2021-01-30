var database, playerCount
var player, form, game
gameState = 0

function setup(){
    createCanvas(400, 400)
    database = firebase.database();

    game = new Game()
    game.getState()
    game.start()
}