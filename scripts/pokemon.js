const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)

function getRandomPokemon() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:', error))
}

function getPokemonName() {
    fetch(url)
        .then(response => response.json())
        .then (data => {
            h2 = document.getElementById('pokemonName')
            h2.textContent = data.name
        })
        .catch(error => console.error('Error:', error))
}

getPokemonName()

function renderPokemon() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            img.src = data.sprites.front_default
            img.alt = data.name
        })
        .catch(error => console.error('Error:', error))
}

renderPokemon()

const img = document.createElement('img')
img.src = url.front_default // image of the pokemon
img.alt = url.name // name of the pokemon

const parentElement = document.getElementById('image')
parentElement.append(img)

const newPokemonButton = document.getElementById('newPokemon')
newPokemonButton.addEventListener('click', () => {
    location.reload()
})