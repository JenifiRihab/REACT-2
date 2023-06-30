const ThreeLastCocktails = ({ cocktailsFromApi }) => {
const table = [];

    cocktailsFromApi.map((element) => {
    element.isPublished && table.push(element);

    return table;

  });

  const RandomCocktail = table.slice(3, 4);

  return (
    <div class="App-cocktail">
        <h1>les trois derniers cocktails</h1>
         {RandomCocktail.map((element) => (

        <div className="contentCock">

          <p class="latest">{element.name}</p>
          <p class="latest">Prix :{element.price}</p>
          <p class="latest">Composition :{element.ingredients}</p>
        
        </div>

      ))}
    </div>
  );
};
export default ThreeLastCocktails 