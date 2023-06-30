
const CoktailRandom = ({ cocktailsFromApi }) => {

  let table = [];
  cocktailsFromApi.map((cocktail) => {
    cocktail.isPublished && table.push(cocktail);
    return table;
  });

  const RandomCocktail = table[Math.floor(Math.random() * table.length)]
  
  return (
    <div className="App-cocktail">
      <h2>Cocktail du Jour</h2>
      <h3>{RandomCocktail.name}</h3>
      <p>Prix :{RandomCocktail.price}€</p>
      <p>Composition du cocktail: {RandomCocktail.ingredients}</p>
    
    </div>
  );
};
export default CoktailRandom 








