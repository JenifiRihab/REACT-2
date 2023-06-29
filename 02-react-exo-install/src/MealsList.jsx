const MealsList = () => {

  const mealsListResponseFromFakeApi = [
    {
      id: 1,
      title: "Poulet au légumes",
      image  : "https://th.bing.com/th/id/OIP.Rxgug5Xtwm9lW6MlfU2KgAHaHa?pid=ImgDet&rs=1",
      description: "Un bon poulet avec des légumes",
      // isPublished: false,
    },
    {
      id: 2,
      title: "Boeuf bourguignon",
      image: "https://th.bing.com/th/id/OIP.XC-C-zve46CI3glne0ULXwAAAA?pid=ImgDet&rs=1",
      description: "Un bon boeuf bourguignon",
      // isPublished: false,
    },
    {
      id: 3,
      title: "Poisson aux légumes",
      image: "https://th.bing.com/th/id/OIP.tMZcrRKeDL4In044whydhwHaFj?pid=ImgDet&rs=1",
      description: "Un bon poisson avec des légumes. Découvrez notre 1ère masterclass dédiée à la cuisine chinoise ! Ingrédients ou ustensiles à avoir, secrets et conseils, recettes traditionnelles.. vous pourrez apprendre à maîtriser les bases de cette cuisine ultra savoureuse .",
      // isPublished: true,
    },
  ];





  return (
    <div>
    
      {mealsListResponseFromFakeApi.map((meal) => {
     
        return (
          meal.isPublished && (
           
            <article>
              <h2>{meal.title}</h2>
              <img src={meal.image} alt={meal.title} />
              <p>{meal.description}</p>
            </article>
          )
        );
      })}
    </div>
  );
};

export default MealsList;



 return (
    <div className="App-meal">
    
      {mealsListResponseFromFakeApi.map((meal) => (
        <meal>
          <h1>{meal.title}</h1>
          <img src={meal.image} alt={meal.title} />
          <p>{meal.description}</p>
        </meal>
      ))}
    </div>
  );
}

export default  MealsList;
