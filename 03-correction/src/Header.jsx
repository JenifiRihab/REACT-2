// Quand on définit le composant (la fonction) Header
// on peut récupérer les props (les paramètres) envoyés par App
// en les mettant en paramètre de la fonction
// ici on récupère "userInfosFromFakeApi"
const Header = ({ userInfosFromFakeApi }) => {
  return (
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
        alt="Linkedin"
      />
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>
          Connecté en tant que {userInfosFromFakeApi.firstName} {userInfosFromFakeApi.lastName}
        </li>
      </ul>
    </header>
  );
};

export default Header;