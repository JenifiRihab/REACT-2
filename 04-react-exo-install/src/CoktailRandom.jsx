const CoktailRandom= () => {
    const cocktailsFromApi = [
      {
        id: 1,
        name: "Mojito",
        price: 8,
        ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
        isPublished: true,
      },
    
    ];
    
    return (
<div className="all">
      <h1>un coktail aléatoire:</h1>
  <div className="App-cocktail">{cocktailsFromApi.map((Cocktails) => {
    
    return (
      Cocktails.isPublished && (
        <article>
            <h3>{Cocktails.name}</h3>
            <p>{Cocktails.price}</p>
            <p>{Cocktails.ingredients}</p>
          </article>
        )
      );
    })}
  </div>
  </div>
);
}


export default CoktailRandom 
  


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