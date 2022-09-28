import Pokemon from "../model/model"
import "../App.css";
import styled from "styled-components";
import {Button} from '../shared/Button';

interface Props {
    pokemon: Pokemon[];
    setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const Title = styled.button`
display: flex;
justify-content: center;
color: yellow;
background: red;
max-width: fit-content;
margin: 50px auto 50px auto;
border-radius: 6px;
padding: 15px;



`;

const PokemonGrid: React.FC<Props> = ({pokemon, setPokemon}) => {

const deleteHandler = (name: string) =>{

    setPokemon(pokemon.filter((i) => i.name !== name));
}

  return (
   <>
   <Button onClick={()=>alert("NOT ME")}>Click to Destroy</Button>
    <div className="pokemongrid__wrapper">
        
        {pokemon.map((i, index)=>(
            <>
            <button className="pokemongrid__container" key={index} onClick={()=>deleteHandler(i.name)}>
            <h5>{i.name}</h5>
            <img src={`https://img.pokemondb.net/sprites/x-y/normal/${i.name}.png`} width='200'  />
            </button>
            </>
        ))}

        
    </div>
    {pokemon.length === 0 && (<Title onClick={()=>window.location.reload()}>Your are the master of destroying Pokemons - Reload for more Mastery</Title>)}
    </>
  )
}

export default PokemonGrid;