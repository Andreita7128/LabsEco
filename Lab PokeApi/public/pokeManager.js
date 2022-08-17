class pokeManager {
    constructor(tileViewPokemon) {
        this.tiles = tileViewPokemon;
        this.popView = null;
    }

    show() {
        this.tiles.forEach((item) => {
            item.show();
        })

        if (this.popView !== null) {
            this.popView.show();
        }
    }

    interact() {
        let anyPokemonClicked = false;
        this.tiles.forEach((pokemon) => {
            if (pokemon.validateClick()) {
                this.popView = new PopUpView(pokemon);
                anyPokemonClicked = true;
            }
        });
        if (anyPokemonClicked === false) {
            this.popView = null;
        }
    }
}