<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pokemon.Name}</title>
  </head>
  <body>
    <a href="/allMons">Back to all Pokemon</a>
    <h1>PokedexNo: {pokemon.PokedexNo}</h1>
    <h2>Name: {pokemon.Name}</h2>
    <h3>Type: {pokemon.Type}</h3>
    <ul>
      Moves:
      {pokemon.Moves.map((move) => (
        <li key={move}>{move}</li>
      ))}
    </ul>
    <br />
    <br />
    <a href={`/updateMon/${pokemon.Name}`}>Update this pokemon</a>
    <br />
    <br />
    <form
      action={`/api/pokemon/deleteOnePokemon/${pokemon.Name}?_method=DELETE`}
      method="post"
    >
      <input type="submit" name="_method" value="DELETE THIS POKEMON" />
    </form>
  </body>
</html>;
