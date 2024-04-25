function PokemonCard({ pokemon }) {
  console.log(pokemon);

  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt="" />
      ) : (
        <p>???</p>
      )}

      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
