class Form {
    constructor(){

    }

    display(){
        var title = createElement('h1')
        title.html("Multi Player Car Race")
        title.position(300, 0)

        var input = createInput('')
        input.position(200, 100)

        var button = createButton('Next')
        button.position(250, 150)

        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()

            var name = input.value()
            playerCount = playerCount + 1

            player.update(name)
            player.updateCount(playerCount)

            greeting.html('Welcome '+ name)
            greeting.position(200, 200)
        })
    }
}