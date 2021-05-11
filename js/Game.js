class Game{
   constructor(){

    }  
//to read the value of gameState from database
 getState() {
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState = data.val()
    });
}

// update the gamestate in the database to a value passed to it
update(state){
    database.ref("/").update({
    gameState:state
    })
}
//to start the game and display the form when the game state is 0
start(){
    if (gameState===0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
}
