const AllCocktails = ({ cocktailsFromApi }) => {
    return (
      <div className="App-cocktail">
        
        <h1> la liste de tous les cocktails: </h1>
        {cocktailsFromApi.map((element) => {
          return (
            element.isPublished && (
              <div>
                <h2>{element.name}</h2>
                <p>Prix : {element.price}</p>
                <p>Les ingrédients :{element.ingredients}</p>
            
              </div>
            )
          );
        })}
      </div>
    );
  };
  
  export default AllCocktails;