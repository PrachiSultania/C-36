class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2', 'Car Racing Game');
        title.style('color', '#00a1d3');
        title.position(550, 100);
        
        var input = createInput("Name")
        input.position(550,200)
        var button = createButton("Play")
        button.position(550,250)
        var greeting = createElement('h3', '')

        //to display the greeting and update the data base when button is pressed
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name1 = input.value()
            playerCount += 1
            player.update(name1)
            player.updateCount(playerCount)
            greeting.html("Hello " + name1)
            greeting.position(130,160)

        })
    }
}