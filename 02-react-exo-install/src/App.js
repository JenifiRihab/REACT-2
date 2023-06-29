// Créez une nouvelle application react (avec npx create-react-app)
// Démarrez votre serveur react avec npm start
// Ouvrez votre projet avec vs code
// Si vous faites le ménage dans les fichiers, gardez au moins un fichier css (on va s'en servir)
// une fois que vous avez la page d'accueil par défaut de react qui s'affiche correctement :

// supprimer le contenu jsx du composant App.js et créez une div qui va contenir votre futurs composants
// Créez un composant Header, contenant un header avec à l'intérieur un logo. Le header doit avoir un fond de couleur en css
// Appeler ce composant dans App.js
// Créez un composant footer, avec un texte de copyright. Le footer doit avoir un fond de couleur également
// Appeler ce composant dans App.js
// Créez un composant MealsList. Ce composant doit afficher toutes les recettes (titre, image, description) contenu dans la variable (donnée plus bas)
// Appeler ce composant dans App.js, entre le Header et le Footer



import Profile from "./profile";
import MealsList from "./MealsList";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Profile />
      <Header/>
      <MealsList />
      <Footer />
    </div>
  );
};

export default App;

