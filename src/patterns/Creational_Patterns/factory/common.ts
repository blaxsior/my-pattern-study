abstract class Button {
    click() {
        console.log("default button");
    }
}

class BlackButton extends Button {
    override click() {
        console.log("black button");
    }
}

class WhiteButton extends Button {
    override click() {
        console.log("white button");
    }
}

class RedButton extends Button {
    override click() {
        console.log("red button");
    }
}