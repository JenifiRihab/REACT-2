import Coworking from "./Coworking";
const MinCoworking = ({ coworkingsFromFakeApi }) => {
  return (
    <div className="App-coworking">
         <h1>  les coworkings possédant une note minimum de 4/5</h1>
      {coworkingsFromFakeApi.map(
        (element) => element.rating >= 4 && <Coworking element={element} />
      )}
    </div>
  );
};

export default MinCoworking;