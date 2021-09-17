class Form {
    constructor() {
        this.title = createElement("H2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("H3");
    }

    display() {
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2, displayHeight/2);
        this.input.position(displayWidth/2, displayHeight/2-100);
        
        this.button.position(displayWidth/2+100, displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name  = this.input.value();
            this.greeting.html("Hello"+ name);
            this.greeting.position(windowWidth/2, windowHeight/2);
        })

        

    }
}