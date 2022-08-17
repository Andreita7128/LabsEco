class viewItem {
    constructor(pokemon, image, x, y) {
        this.model = pokemon;
        this.image = image;
        this.x = x;
        this.y = y;
    }

    show() {
        image(this.image, this.x, this.y, 120, 120);
    }

    validateClick() {
        return (mouseX > this.x && mouseX < this.x + 120 && mouseY > this.y && mouseY < this.y + 120);
    }
}