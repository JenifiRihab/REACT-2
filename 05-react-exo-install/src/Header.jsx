
const Header = ({ userFromApi }) => {
    return (
      <header className="App-Header">

        <img className="App-logo"src="https://th.bing.com/th/id/OIP.cHibh-31SR8CncJUTbY79QAAAA?pid=ImgDet&rs=1" />

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

          </ul>
        </nav>

      </header>
    );
  };
  
  export default Header;
