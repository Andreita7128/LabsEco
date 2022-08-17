class PopUpView {
    constructor(model) {
        this.model = model;
    }

    show() {
        textSize(20);
        textAlign(CENTER);
        text(`${this.model.model.name}
        Abilities: ${this.model.model.abilities[0].ability.name} & ${this.model.model.abilities[1].ability.name}
        Base Experience: ${this.model.model.base_experience}
        ID: ${this.model.model.id}
        Some Moves:
        ${this.model.model.moves[0].move.name} - ${this.model.model.moves[1].move.name}
        ${this.model.model.moves[2].move.name} - ${this.model.model.moves[3].move.name}`, 50, 400, 500);
    }
}