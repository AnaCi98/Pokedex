/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import Pokemon from './Pokemon';
import Menu from './Menu';
import ButtonSearch from './ButtonSearch';
import './Searcher.css';
import './IconMenu.css';
import './Menu.css';

function Searcher(props) {
  const {
    classInitial, openMenu, closeMenu, modalMenu,
  } = props;
  const [pokemon, setPokemon] = useState('');
  const [modal, openModal] = useState(false);
  const [data, setData] = useState([]);
  const getData = async (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const getFetch = await fetch(url).then((result) => result.json());
    setData(getFetch);
  };
  return (
    <section>
      <div className={`${classInitial}`}>
        <img
          className="iconMenu"
          onClick={() => openMenu()}
          src="../assets/menu.png"
          alt="menu"
        />
      </div>
      <div className="containerSearcher">

        <Menu modalMenu={modalMenu} closeMenu={closeMenu} />
        <div>
          <p>Look for your favorite pokemon</p>
          <div className="containerInput">
            <input
              type="text"
              className="searchInput"
              onChange={(event) => {
                setPokemon(event.target.value.toLowerCase());
              }}
            />
            <button
              className="buttonSearch"
              type="submit"
              onClick={() => {
                if (pokemon !== '') {
                  getData(pokemon);
                  openModal(true);
                }
              }}
            >
              Search

            </button>
          </div>
        </div>
        <Pokemon data={data} modal={modal} />
      </div>
      <ButtonSearch />

    </section>
  );
}
export default Searcher;
