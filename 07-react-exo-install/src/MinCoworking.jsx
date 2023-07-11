import Coworking from "./Coworking";

const MinCoworking = ({ coworkingsFromFakeApi }) => {

  
  return (
    <div className="App-coworking">
        <h1>  les coworkings possédant une note minimum de 4/5</h1>
        {coworkingsFromFakeApi.map((el) => el.rating >= 4 && <Coworking el={el} />)}
   
    </div>
    
  );
};

export default MinCoworking;