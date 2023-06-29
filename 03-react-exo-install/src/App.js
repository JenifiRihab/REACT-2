// Créez une nouvelle application react, qui sera un site "ressemblant" à Linkedin
// Dans cette application, vous allez devoir créer plusieurs composants :

// -- un composant Profile, qui affiche les informations de votre profil
// -- un composant Experiences, qui affiche les différents jobs que vous avez eu

// -- un Header, qui affiche un logo, votre nom et un faux menu
// -- un footer, qui affiche le logo au centre et un copyright 

// Le composant Profile affiche les informations issues de la variable userInfosFromFakeApi (données plus bas), qui représente le résultat d'un faux appel d'API : 

//   const userInfosFromFakeApi = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 42,
//     email: "contact@johndoe.fr",
//     phone: "0123456789",
//     adress: "1 rue de la Paix",
//     city: "Paris",
//     zipCode: "75000",
//     country: "France",
//     job: "Développeur web"
//     };

// Le composant Experiences affiche les expériences issues de la variable experiencesFromFakeApi (donnée plus bas). Toutes les expériences doivent être affichées, et le job actuel doit être affichée différemment (soit avec du css, soit avec une mise en page différente)

// const experiencesFromFakeApi = [
//     {
//         id: 1,
//         title: "Développeur front",
//         company: "Company 1",
//         description: "Développement d'une application web front",
//         startDate: "2021-01-01",
//         endDate: "2021-02-01",
//         isCurrent: false,
//     },
//     {
//         id: 2,
//         title: "Développeur back",
//         company: "Company 2",
//         description: "Développement d'une application web back",
//         startDate: "2022-02-01",
//         endDate: "2022-03-01",
//         isCurrent: false,
//     },
//     {
//         id: 3,
//         title: "Développeur fullstack",
//         company: "Company 3",
//         description: "Développement d'une application web fullstack",
//         startDate: "2023-03-01",
//         endDate: null,
//         isCurrent: true,
//     },
// ]; 

import Header from "./Header";
import Profile from "./Profile";
import Experiences from "./Experiences";
import PostsFeed from "./PostsFeed";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <Header/>
      <Profile />
      <Experiences />
      <PostsFeed/>
      <Footer />

    </>
  );
};

export default App;

