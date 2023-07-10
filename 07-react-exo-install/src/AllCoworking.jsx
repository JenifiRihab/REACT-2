const AllCoworking = ({ coworkingsFromFakeApi }) => {
    return (
      <div className="App-coworking">
        
        <h1> la liste de tous les <strong>COWORKING</strong>: </h1>
       
        {coworkingsFromFakeApi.map((element) => {
          return (
            element.rating && (

              <div>

                <h2>{element.name}</h2>
                <p>address : {element.address}</p>
                <p>city :{element.city}</p>
                <p>rating :{element.rating}</p>
                <img className="logo2" src="https://th.bing.com/th/id/R.dcbf865113333aa49d212103e467ec92?rik=I8p%2b22S%2bQoBLjQ&pid=ImgRaw&r=0" alt="" />
            
              </div>

            )
          );
        })}
      </div>
    );
};
  
  export default AllCoworking;
