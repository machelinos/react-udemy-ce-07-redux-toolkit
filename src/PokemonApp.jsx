import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store'

export const PokemonApp = () => {
  const dispatch = useDispatch()
  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons)

  const handleNext = () => {
    dispatch(getPokemons(page))
  }

  useEffect(() => {
    dispatch(getPokemons())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={handleNext}>
        Next page
      </button>
    </>
  )
}
