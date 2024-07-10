<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>All the Pokemon!</title>
</head>
<body>
    <a href="/">Back to the homepage</a>
    <br />
    <a href="/createOneMon">Create a new Pokemon</a>
    {pokemon.map((mon) => (
      <div key={mon._id}>
        <h1>Pokedex No. {mon.PokedexNo}</h1>
        <h2>Name: <a href={`/oneMon/${mon.Name}`}>{mon.Name}</a></h2>
      </div>
    ))}
</body>
</html>
