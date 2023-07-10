const AllProducts = ({ productsFromApi }) => {
    return (
      <div className="App-products">
        
        <h1> la liste de tous les produits: </h1>
        {productsFromApi.map((Products) => {
          return (
            Products.publishedAt && (
              <div>
                <h2>{Products.name}</h2>
                <p>Prix : {Products.price}</p>
                <p>Les ingrédients :{Products.description}</p>
                <p>Les category :{Products.category}</p>
            
              </div>
            )
          );
        })}
      </div>
    );
  };
  
  export default AllProducts;