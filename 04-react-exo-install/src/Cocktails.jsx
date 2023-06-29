const cocktail= () => {
      const cocktailsFromApi = [
        {
          id: 1,
          name: "Mojito",
          price: 8,
          ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
          isPublished: true,
        },
        {
          id: 2,
          name: "Margarita",
          price: 10,
          ingredients: ["Tequila", "Triple sec", "Citron vert"],
          isPublished: true,
        },
        {
          id: 3,
          name: "Sangria",
          price: 6,
          ingredients: ["Vin rouge", "Fruits", "Sucre"],
          isPublished: true,
        },
        {
          id: 4,
          name: "Pina colada",
          price: 12,
          ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
          isPublished: true,
        }
      
      ];
      
      return (
<div className="all">

        <h1>la liste de tous les cocktails:</h1>


    <div className="App-cocktail">{cocktailsFromApi.map((cocktail) => {
      
      return (
        cocktail.isPublished && (
          <article>
              <h3>{cocktail.name}</h3>
              <p>{cocktail.price}</p>
              <p>{cocktail.ingredients}</p>
            </article>
          )
        );
      })}
    </div>
    </div>
  );
}


  export default  cocktail
    

// const Cocktails= ({cocktailsFromApi}) => {
//   return (
//     <main className="all">
//       <h1>la liste de tous les cocktails:</h1>
//       <ul>
//         <li>name : {cocktailsFromApi.name}</li>
//         <li>price : {cocktailsFromApi.price}</li>
//         <li>ingredients : {cocktailsFromApi.ingredients}</li>
//       </ul>
//     </main>
//   );
// };

// export default  Cocktails