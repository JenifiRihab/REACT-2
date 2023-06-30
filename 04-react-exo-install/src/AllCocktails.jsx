const AllCocktails = ({ cocktailsFromApi }) => {
    return (
      <div className="App-cocktail">
        
        <h1> la liste de tous les cocktails: </h1>
        {cocktailsFromApi.map((cocktail) => {
          return (
            cocktail.isPublished && (
              <div>
                <h2>{cocktail.name}</h2>
                <p>Prix : {cocktail.price}</p>
                <p>Les ingrédients :{cocktail.ingredients}</p>
            
              </div>
            )
          );
        })}
      </div>
    );
  };
  
  export default AllCocktails;


  