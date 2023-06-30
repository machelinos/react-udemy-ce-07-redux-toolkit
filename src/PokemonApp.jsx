import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store'

export const PokemonApp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />

      <ul>
        <li>Psyduck</li>
        <li>Charmander</li>
        <li>Pikachu</li>
      </ul>
    </>
  )
}
