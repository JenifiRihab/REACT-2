// const Coworking = ({el}) =>{
    

    
//     return(

//         <div >

//             <h2>{el.name}</h2>
//             <img className="logo2" src="https://th.bing.com/th/id/R.dcbf865113333aa49d212103e467ec92?rik=I8p%2b22S%2bQoBLjQ&pid=ImgRaw&r=0" alt="" />
//             <p>Address : {el.address}</p>
//             <p>City : {el.city}</p>
//             <p>Note : {el.rating}</p>

//         </div>
//     )
// }

// export default Coworking





const Coworking = ({el}) =>{
    
    const displayCoworkings = false;
         
      
           const handleClick = () => {
             console.log("click");
           };
   
       return(
   
   <section className="best-coworkings-section">
         <h2>Best coworkings</h2>
   
         <button onClick={handleClick}>Afficher les coworkings</button>
         {displayCoworkings && (
           <div >
   
               <h2>{el.name}</h2>
               <img className="logo2" src="https://th.bing.com/th/id/R.dcbf865113333aa49d212103e467ec92?rik=I8p%2b22S%2bQoBLjQ&pid=ImgRaw&r=0" alt="" />
               <p>Address : {el.address}</p>
               <p>City : {el.city}</p>
               <p>Note : {el.rating}</p>
   
           </div>
          )}
   </section>
     );
   };
   
   
   export default Coworking