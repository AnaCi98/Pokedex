/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import Pokemon from './Components/Pokemon';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [data, setData] = useState([]);
  const getData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const getFetch = await fetch(url).then((result) => result.json());
    setData(getFetch);
  };
  // useEffect(() => {
  //   getData(pokemon);
  // }, []);
  return (

    <div className="App">
      <p>Hello</p>
      <input type="text" onChange={(event) => setPokemon(event.target.value)} />
      <p onClick={() => {
        getData(pokemon);
      }}
      >
        CLICKEAME

      </p>
      <Pokemon data={data} />
    </div>

  );
}

export default App;
