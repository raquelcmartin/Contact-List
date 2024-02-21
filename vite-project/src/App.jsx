import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const pokemonNumber = Math.floor(Math.random() * 1302) + 1 
  const [pokemon, setPokemon] = useState(null) // null means loading

  // not allowed to fetch() right here

  useEffect(() => { // Annoying Rule: this function cannot be async
    console.log('Render finished, Step 2: useEffect is happening')

    async function getApiData() { // Annoying Rule ABove
    // only allowed to fetch() right here
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    const json = await response.json()
    setPokemon(json)

    }

    getApiData() // see Annoying Rule above
  }, []) // stop from running infinitley 

  if (!pokemon) {
    return <h1> Loading. . .</h1>
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  )
}

export default App
