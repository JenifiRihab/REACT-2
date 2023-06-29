import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Profile from "./Profile";
import Jobs from "./Jobs";
import FeedPosts from "./FeedPosts";

function App() {
  // On créé la variable contenant les infos de l'utilisateur
  // dans le composant App
  // afin de pouvoir la partager avec les composants enfants
  // c'est à dire avec Header et Profile
  const userInfosFromFakeApi = {
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

  return (
    <>
      {/* 
      Pour envoyer la variable userInfosFromFakeApi au composant Header et au
      composant Footer, on la passe en paramètre de ces composants
      C'est ce qu'on appelle les "props"

     */}
      <Header userInfosFromFakeApi={userInfosFromFakeApi} />
      <Profile userInfosFromFakeApi={userInfosFromFakeApi} />
      <Jobs />
      <FeedPosts />
      <Footer />
    </>
  );
}

export default App;