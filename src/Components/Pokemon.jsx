/* eslint-disable react/prop-types */
function Pokemon(props) {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <p>{data.name}</p>
      <img
        className="imagePokemon"
        src={data.sprites.back_default}
        alt="pokemon"
      />
    </div>
  );
}
export default Pokemon;
