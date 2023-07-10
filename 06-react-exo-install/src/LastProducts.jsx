const LastProducts = ({ productsFromApi }) => {
    const table = [];
    
    productsFromApi.map((Products) => {
        productsFromApi.isPublished && table.push(Products);    
      });
    
      const allProducts = productsFromApi.slice(-2);
    
      return (
        <div class="App-products">
            <h1>les derniers Products</h1>
             {allProducts.map((Products) => (
    
            <div>
    
              <p class="latest">{Products.name}</p>
              <p class="latest">Prix :{Products.price}</p>
              <p class="latest">Composition :{Products.description}</p>
            
            </div>
    
          ))}
        </div>
      );
    };
    export default LastProducts  

