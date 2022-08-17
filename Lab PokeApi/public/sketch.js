let canvas;
let apiSpecificPokemon = [];
let pokeModels = [];
let images = [];
const URLIMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`
let manager = null;
let tileViewItems = [];
let x = 120;
let y = 30;
let screen = 0;
let bg;


function preload() {
    fetchPokemonList();
}

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    bg = loadImage(`Images/bg.jpg`);

}

function draw() {
    //background(0, 50);
    background(0);
    newCursor();
    if (manager !== null) {
        manager.show();
    }
    if(screen === 0){
        image(bg, 0, 0);
        textSize(20)
        text(`press here to start`, 220, 580);
    }

}

function mouseClicked() {
    if (screen === 0 && mouseY > 420) {
        for (let index = 0; index < pokeModels.length; index++) {
            images.push(loadImage(URLIMAGE + (index + 1) + `.png`));
            console.log(images)
            tileViewItems.push(new viewItem(pokeModels[index], images[index], x, y));
            console.log(tileViewItems);
            x += 120;
            if (x >= 370) {
                x = 120;
                y += 120;
            }
        }

        manager = new pokeManager(tileViewItems);
        screen = 1;
    }
    if (screen === 1) {
        manager.interact();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

const fetchPokemonList = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'
    try {
        let query = await fetch(URL);
        let data = await query.json();
        const {
            results
        } = data;
        data.results.forEach(element => {
            apiSpecificPokemon.push(element);
            // console.log(apiSpecificPokemon);
        });
    } catch (error) {
        console.log(error);
    }
    fetchSpecificPokemon();
}

function fetchSpecificPokemon() {
    apiSpecificPokemon.forEach(element => {
        fetch(element.url)
            .then(response => response.json())
            .then(data => {
                pokeModels.push(data);
            });
    });
}