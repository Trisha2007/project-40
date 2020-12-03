class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('𝓹𝓵𝓪𝔂');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('𝖗𝖊𝖘𝖊𝖙');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("𝒻𝓇𝓊𝒾𝓉 𝒸𝒶𝓉𝒸𝒽𝑒𝓇");
        this.title.position(200, 200);
        this.title.style('font-size', '60px');
        this.title.style('color', 'plum');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lightblue');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lime');
        this.reset.position(500, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lime');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '70px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({players:null});

        });

    }
}