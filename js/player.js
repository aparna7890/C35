class Player{
    constructor(){

    }

    //it reads the player count from db
    getCount(){
        database.ref('PlayerCount').on("value", function(data){
            playerCount = data.val();
        })
    }

    //updates the player count in the database
    updateCount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }

    //updates the name of the player in the database
    update(playerName){
        var playerIndex = 'player' + playerCount
        database.ref(playerIndex).set({
            name : playerName
        })
    }
}