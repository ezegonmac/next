const Pokemon = ({ pokemon }) => {
  return(
    <li>{pokemon.name}</li>
  )
}

export default function Pokemones({ pokemones }) {
  console.log(pokemones)
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
      </ul>
    </div>
  )
}

// Si next encuentra esta funcion, generara un HTML previo para cada pagina
// ==> aumento considerable de la velocidad de carga

// Indicarle a next que esta pagina se va a generar de manera estatica
// npm run build

// Static Site Generation
export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }
}