// Quand on définit le composant (la fonction) Profile
// on peut récupérer les props (les paramètres) envoyés par App
// en les mettant en paramètre de la fonction
// ici on récupère "userInfosFromFakeApi"

const Profile = ({ userInfosFromFakeApi }) => {
    return (
      <main>
        <h1>
          Profil de {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}
        </h1>
        <ul>
          <li>Prénom : {userInfosFromFakeApi.firstName}</li>
          <li>Nom : {userInfosFromFakeApi.lastName}</li>
          <li>Age : {userInfosFromFakeApi.age}</li>
          <li>Email : {userInfosFromFakeApi.email}</li>
          <li>Téléphone : {userInfosFromFakeApi.phone}</li>
          <li>Adresse : {userInfosFromFakeApi.adress}</li>
          <li>Ville : {userInfosFromFakeApi.city}</li>
          <li>Code postal : {userInfosFromFakeApi.zipCode}</li>
          <li>Pays : {userInfosFromFakeApi.country}</li>
          <li>Emploi : {userInfosFromFakeApi.job}</li>
        </ul>
      </main>
    );
  };
  
  export default Profile;