
const Header = ({ userFromApi }) => {
    return (
      <header className="App-Header">
        <img className="App-logo"src="https://i.pinimg.com/736x/57/0b/23/570b232c8d0402ffb4a22003a8a9c9d9.jpg" />
        <h1 className="title">Nos Top sélections de Thèmes Cocktails</h1>
        <nav>
          <ul>
            <li>
              <a href="#">COCKTAILS DU MOMENT</a>
            </li>
            <li>
              <a href="#">ACTU COCKTAILS</a>
            </li>
            <li>
              <a href="#">BAR & SORTIES</a>
            </li>
            <li>
              Connecté en tant que {userFromApi.firstName} {userFromApi.lastName}
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;


  