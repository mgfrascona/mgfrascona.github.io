const pokemonName = document.getElementById('pokemonName');
const pokemonImg = document.querySelector('#image img');
const pokemonHeader = document.getElementById('pokemonHeader');
const newPokemonButton = document.getElementById('newPokemon');

let revealed = false;

function getRandomPokemonUrl() {
    const id = Math.floor(Math.random() * 150) + 1;
    return 'https://pokeapi.co/api/v2/pokemon/' + id;
}

function loadPokemon() {
    revealed = false;
    pokemonHeader.textContent = "Who's that Pokemon?";
    pokemonName.textContent = '';
    pokemonImg.classList.remove('revealed');
    pokemonImg.classList.add('silhouette');
    pokemonImg.src = '';
    pokemonImg.alt = '';

    fetch(getRandomPokemonUrl())
        .then(response => response.json())
        .then(data => {
            pokemonImg.src = data.sprites.other['official-artwork'].front_default;
            pokemonImg.alt = data.name;
            pokemonImg.dataset.name = data.name;
        })
        .catch(error => console.error('Error:', error));
}

function revealPokemon() {
    if (revealed) return;
    revealed = true;
    pokemonImg.classList.remove('silhouette');
    pokemonImg.classList.add('revealed');
    pokemonHeader.textContent = "It's " + pokemonImg.dataset.name + "!";
    pokemonHeader.style.textTransform = 'capitalize';
}

pokemonImg.addEventListener('click', revealPokemon);

newPokemonButton.addEventListener('click', loadPokemon);

loadPokemon();
