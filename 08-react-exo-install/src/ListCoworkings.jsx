import { useState } from "react";
import ShowCoworking from "./ShowCoworking";

const ListCoworkings = () => {


  // je créé une variable de state pour stocker
  // les coworkings à récupérer depuis l'api
  // par défaut, je mets en valeurs pour la variable
  // un tableau vide

  // la variable coworkings permet de récupérer la valeur
  // actuelle du state
  // et la fonction setCoworkings permet de modifier la valeur
  
  
  //   const coworkings = [
  //     {
  //       id: 1,
  //       name: "Coworking 1",
  //       address: "Bordeaux",
  //       phone: "123456789",
  //       img: "https://picsum.photos/200/300",
  //     },
  //     {
  //       id: 2,
  //       name: "Coworking 2",
  //       address: "Merignac",
  //       phone: "123456789",
  //       img: "https://picsum.photos/200/300",
  //     },
  //     {
  //       id: 3,
  //       name: "Coworking 3",
  //       address: "Bordeaux",
  //       phone: "123456789",
  //       img: "https://picsum.photos/200/300",
  //     },
  //     {
  //       id: 4,
  //       name: "Coworking 4",
  //       address: "Eysines",
  //       phone: "123456789",
  //       img: "https://picsum.photos/200/300",
  //     },
  //     {
  //       id: 5,
  //       name: "Coworking 5",
  //       address: "Lormont",
  //       phone: "123456789",
  //       img: "https://picsum.photos/200/300",
  //     },
  //   ];
              
              
    const [coworkings, setCoworkings] = useState([]);
              
  // je créé une fonction qui va faire un appel fetch
  // sur mon api
    const fetchCoworkings = async () => {
      // je fais un appel fetch sur mon api
      if (coworkings.length === 0) {
        setTimeout(async()=>{
        const coworkingsResponse = await fetch("/coworkings.json");
        const coworkingsData = await coworkingsResponse.json();
                
        // si la variable coworkings est vide
        // je stocke dans la variable coworkings
        // les coworkings récupérés depuis l'api
        // ça provoque un rechargement du composant
                  
          setCoworkings(coworkingsData);
        }, 2000);
      }
    };
              
    // j'appelle ma fonction fetchCoworkings
    fetchCoworkings();
    const [city, setCity] = useState("Bordeaux");
    const handleClick = (value) => {
      setCity(value);
    };
                
  // const coworkingsFiltered = coworkings.filter((coworking) => {

  const coworkingsFiltered = coworkings.filter((coworking) => {
    if (city === "All") {
      return true;
    }

    return coworking.address === city;
  });

  return (
    <section>
      <h2>Liste des coworkings</h2>

      <button  className="btn"  onClick={() => handleClick("Bordeaux")}>Bordeaux</button>
      <button  className="btn"  onClick={() => handleClick("Merignac")}>Mérignac</button>
      <button  className="btn"  onClick={() => handleClick("Lormont")}>Lormont</button>
      <button  className="btn"  onClick={() => handleClick("Eysines")}>Eysines</button>

      <button  className="btn"  onClick={() => handleClick("All")}>TOUS</button>

      {coworkingsFiltered.length === 0 ? (<main>
	<svg class="sp" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#000" />
				<stop offset="40%" stop-color="#fff" />
				<stop offset="100%" stop-color="#fff" />
			</linearGradient>
			<linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0%" stop-color="#000" />
				<stop offset="60%" stop-color="#000" />
				<stop offset="100%" stop-color="#fff" />
			</linearGradient>
			<mask id="mask1">
				<rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
			</mask>
			<mask id="mask2">
				<rect x="0" y="0" width="128" height="128" fill="url(#grad2)" />
			</mask>
		</defs>
		<g fill="none" stroke-linecap="round" stroke-width="16">
			<circle class="sp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
			<g stroke="hsl(223,90%,50%)">
				<path class="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" stroke="hsl(343,90%,50%)" stroke-dasharray="43.98 307.87" />
				<g transform="translate(42,42)">
					<g class="sp__worm2" transform="translate(-42,0)">
						<path class="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" stroke-dasharray="43.98 175.92" />
					</g>
				</g>
			</g>
			<g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
				<path class="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" stroke-dasharray="43.98 307.87" />
				<g transform="translate(42,42)">
					<g class="sp__worm2" transform="translate(-42,0)">
						<path class="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" stroke-dasharray="43.98 175.92" />
					</g>
				</g>
			</g>
			<g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
				<path class="sp__worm1" d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64" stroke-dasharray="43.98 307.87" />
				<g transform="translate(42,42)">
					<g class="sp__worm2" transform="translate(-42,0)">
						<path class="sp__worm2-1" d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14" stroke-dasharray="43.98 175.92" />
					</g>
				</g>
			</g>
		</g>
	</svg>
</main>) : (

        <>
       {coworkingsFiltered.map((coworking) => {

//         return (
//           <article key={coworking.id}>
//             <h3>{coworking.name}</h3>
//             <p>{coworking.address}</p>
//             <p>{coworking.phone}</p>
//             <img src={coworking.img} alt={coworking.name} />
//             <button onClick={() => handleDelete(coworking.id)}>Supprimer le coworking</button>
//           </article>
//         );
//       })}
//     </section>
//   );
// };
        return <ShowCoworking coworking={coworking} />;
      })}
      </>
    )}
  </section>
);
};

export default ListCoworkings;