
const Header = ({ cartFromApi }) => {
    return (
      <header className="App-Header">
    <img  className="App-logo" src="https://th.bing.com/th/id/OIP.tnr2A3nsTmMIw_1cronD4wHaHa?pid=ImgDet&rs=1" alt="" />
        <h1 className="title">Commerce en ligne</h1>
        <nav>
          <ul className="menu" >
            <li>
              <a href="#">PRODUIT </a>
            </li>
            <li>
              <a href="#">CLIENTS </a>
            </li>
            <li>
              <a href="#">RESSOURCES</a>
            </li>
            
          </ul>
        </nav>
      </header>
    );
    
  };
  
  export default Header;
