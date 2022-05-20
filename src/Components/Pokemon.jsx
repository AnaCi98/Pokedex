function Pokemon(props) {
  const { data, modal } = props;
  const allAbilities = [];
  if (data.abilities) {
    data.abilities.forEach((element) => allAbilities.push(element.ability));
  }

  if (!modal) return null;
  return (
    <section className="cardPokemon">
      {data.sprites ? (
        <img
          className="imagePokemon"
          src={data.sprites.front_default}
          alt="pokemon"
        />
      ) : null }
      <div className="infoPokemon">
        <div className="infoName">
          <p>
            Name:
            {' '}
            {data.name}
          </p>
          <p>
            No:
            {' '}
            {data.id}
          </p>
        </div>
        <p>Abilities:</p>
        <div className="listAbilities">
          {allAbilities ? allAbilities.map((abilitie) => (
            <li>
              {abilitie.name}
            </li>
          )) : null}
        </div>
        <a href={`https://www.pokemon.com/el/pokedex/${data.name}`} target="_blank" rel="noreferrer">
          <button type="submit" className="morePokemon">
            See more
          </button>
        </a>
      </div>
    </section>
  );
}
export default Pokemon;
