// Créez une nouvelle application react, qui sera un blog sur les cocktails
// Votre application doit comporter un header :
// -- le header affiche un logo à gauche, un titre au centre et des items de menu (fake) à gauche
// -- après les items de menu, il faudra afficher le nom de l'utilisateur (issu de la variable "userFromApi" plus bas). 

// Votre application doit afficher sous le header un coktail aléatoire issue de la variable "cocktailsFromApi" (à chaque fois que la page est rechargée, un nouveau cocktail s'affiche) (uniquement ceux publiés)
// Votre application doit ensuite afficher les trois derniers cocktails issus de la variable "cocktailsFromApi" (uniquement ceux publiés)
// Votre application doit ensuite afficher la liste de tous les cocktails issus de la variable ""cocktailsFromApi" (uniquement ceux publiés)

// Votre application doit comporter un footer, avec une image et les horaires d'ouverture de votre bar à cocktails (en dur)

//   const userFromApi= {
//     firstName: "John",
//     lastName: "Doe",
//     age: 42,
//     email: "contact@johndoe.fr",
//     phone: "0123456789",
//     adress: "1 rue de la Paix",
//     city: "Paris",
//     zipCode: "75000",
//     country: "France",
//     job: "Développeur web",
//   };

//   const cocktailsFromApi = [
//     {
//       id: 1,
//       name: "Mojito",
//       price: 8,
//       ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
//       isPublished: true,
//     },
//     {
//       id: 2,
//       name: "Margarita",
//       price: 10,
//       ingredients: ["Tequila", "Triple sec", "Citron vert"],
//       isPublished: true,
//     },
//     {
//       id: 3,
//       name: "Sangria",
//       price: 6,
//       ingredients: ["Vin rouge", "Fruits", "Sucre"],
//       isPublished: false,
//     },
//     {
//       id: 4,
//       name: "Pina colada",
//       price: 12,
//       ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
//       isPublished: true,
//     }
//   ];


import "./App.css";
import Header from "./Header";
import Cocktails from "./Cocktails";
import Footer from "./Footer";
import CoktailRandom from "./CoktailRandom";
import ThreeLastCocktails from "./ThreeLastCocktails";
const App = () => {

  const userFromApi= {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };

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
          isPublished: false,
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
    <>
      <Header userFromApi={userFromApi} />
      <CoktailRandom cocktailsFromApi={cocktailsFromApi} />
      <ThreeLastCocktails cocktailsFromApi={cocktailsFromApi}/>
      <Cocktails cocktailsFromApi={cocktailsFromApi} />
      <Footer />

    </>
  );
};

export default App;

