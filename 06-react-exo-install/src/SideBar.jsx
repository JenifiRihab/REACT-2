
  const SideBar = ({ productsFromApi }) => {
    const table = [];
    
    productsFromApi.map((Products) => {
        productsFromApi.isPublished && table.push(Products);    
      });
    
      const allProducts = productsFromApi.slice(-1);
    
      return (
        <div class="App-products1">
             {allProducts.map((Products) => (
    
            <div>
    
              <p class="latest">{Products.name}</p>
              <p class="latest">Prix :{Products.price}</p>
              <p class="latest">Composition :{Products.description}</p>
              <img className="logo2" src=" https://cdn.discordapp.com/attachments/1101969864345788557/1124354287632384001/card.png " alt="" />
            </div>
    
          ))}
        </div>
      );
    };
    export default SideBar;