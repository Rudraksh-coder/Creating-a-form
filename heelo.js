class Form {
    constructor() {
        this.H1 = createElement("h1");
        this.button = createButton("submit");
        this.input = createInput("name");
        this.after = createElement("h3");
    }
    display() {
        this.H1.html("HTML page from Java Script Language!");
        this.H1.position(windowWidth/2-270, windowHeight-600);

        this.input.position(windowWidth/2-100, windowHeight/2-90);
        this.button.position(windowWidth/2-50, windowHeight/2-50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.after.html("Hello to my Java Scripted HTML page:" + this.input);
            this.after.position(windowWidth/2, windowHeight/2);
        })

    }
    hide() {
        this.input.hide();
        this.button.hide();
    }
}