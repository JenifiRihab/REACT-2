const ThreeLastCocktails = ({ cocktailsFromApi }) => {
const table = [];

    cocktailsFromApi.map((cocktail) => {
    cocktail.isPublished && table.push(cocktail);

    return table;

  });

  const RandomCocktail = table.slice(3, 4);

  return (
    <div class="App-cocktail">
        <h1>les trois derniers cocktails</h1>
         {RandomCocktail.map((cocktail) => (

        <div className="contentCock">

          <p class="latest">{cocktail.name}</p>
          <p class="latest">Prix :{cocktail.price}</p>
          <p class="latest">Composition :{cocktail.ingredients}</p>
        
        </div>

      ))}
    </div>
  );
};
export default ThreeLastCocktails 