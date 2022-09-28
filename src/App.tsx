import { useEffect, useState } from 'react';
import './App.css';
import PokemonGrid from './components/PokemonGrid';
import Pokemon from './model/model';

function App() {



  const [pokemon, setPokemon] = useState<Pokemon[]>([])

  const getData = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
    .then(res => res.json())
    .then((data)=> setPokemon(data.results))


  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    
 <PokemonGrid pokemon={pokemon} setPokemon={setPokemon}/>
    </>
  );
}

export default App;
