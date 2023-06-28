//____________ exercice____________________ :
      
      // Créer une application react qui affiche juste (pour l'instant) juste un "Bonjour Piscine". Pour ça :

      // -- dans le terminal, placez vous dans le dossier qui contient tous vos projets 
      // -- installez react avec npx create-react-app nom-du-projet (ici nom-du-projet doit être modifié avec le nom réel que vous voulez). Attention à ne pas mettre d'espaces, de majuscules ou de caractères spéciaux dans le nom du dossier
      // -- placez vous avec le terminal dans le dossier créé par react
      // -- lancez le serveur react avec "npm start" (afin d'avoir les modifs / la compilation de votre code visibles dans le navigateur sans avoir à recharger la page)
      // -- ouvrez le dossier avec visual studio code
      // -- dans le dossier src, modifiez le contenu du JSX du composant App pour créer uniquement une balise paragraphe avec "Bonjour Piscine".


// ___________solution_____________________:

      // function App() {
      //   return (
      //     <p>Bonjour Piscine</p>
      //   );
      // }

      // export default App;


// ----------------------------------------------------------


//____________ exercice____________________ :


    // Créer un composant Profile, qui permet d'afficher les infos résumé du profil (nom, prénom, âge et métier).
    // Appeler ce composant à la fin de votre composant App


// ___________solution_____________________:


      // export default App;

      // const user = {
      //   name: 'Beyoncé',
      //   age :'41-years-old',
      //   job: singer ,
      //   imageUrl: 'https://media.allure.com/photos/5a36d521dd0c5b5b96b21795/master/pass/GettyImages-862604114.jpg',
      //   imageSize: 150,

      // };

      // function App() {
      //   return (
      //       <>
      //         <h1>{user.name}</h1>
      //         <h2>{user.age}</h2>
      //         <img
      //           className="avatar"
      //           src={user.imageUrl}
      //           alt={'Photo of ' + user.name}
      //           style={{
      //             width: user.imageSize,
      //             height: user.imageSize

      //           }}
      //         />
      //       </>
          
      //     );
      // }


 //  --------------OU-------------
      // function App() {
      //   return (
      //     <div className="App">
      //       <p>
      //         Bonjour Piscine
      //       </p>
      //       <Profile />
      //     </div>
      //   );
      // }
      
      // export default App;

//------------------------------------------------------------------------


// Dans votre application react, créez un nouveau composant ArticlesList
// Faites le composant très simple au départ (juste une balise <p> par exemple)
// Appelez ce composant dans App.js
// Si le composant s'affiche bien dans le navigateur :
// modifiez votre composant pour afficher 3 ou 4 articles avec titre, image et texte
import ArticlesList from './ArticlesList';

    function App() {
        return (
          <div className="App">
            <ArticlesList/>
          </div>
        );
      }
      
      export default App;



