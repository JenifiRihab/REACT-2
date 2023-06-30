
const CoktailRandom = ({ cocktailsFromApi }) => {

  let table = [];
  cocktailsFromApi.map((element) => {
    element.isPublished && table.push(element);
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








