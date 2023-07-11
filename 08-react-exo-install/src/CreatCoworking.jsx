// const CreateCoworking =() =>{
//     const handleSubmit =(event) => {
//         event.preventDefault();

//         const title = event.target.title.value;
//         const description = event.target.description.value;
//         const address = event.target.address.value;
//              console.log(title + " " + description + " " + address);

//     };
    
//     return (

//         <form className="form" onSubmit={handleSubmit}>

//             <label>Titre</label>
//                 <input type="text" name="title" /> 
//     <br />
//     <hr />
//             <label>Description</label>
//                 <textarea name="description" cols="30" rows="5"></textarea>
//        <br /> 
//        <hr />
//             <label>Adresse</label>
//                 <input type="text" name="address" />
//         <br />
//         <hr />
//             <button  className="btn"  type="submit">Créer</button>

//         </form>

//       );
//     };
    
//     export default CreateCoworking;

// _________________________________________________________________

 import { useState } from "react";

    const CreateCoworking = () => {
      
      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [address, setAddress] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        setTitle(event.target.title.value);
        setDescription(event.target.description.value);
        setAddress(event.target.address.value);
      };
    
    return (

    <div>
        <form className="form" onSubmit={handleSubmit}>

            <label>Titre</label>
                <input type="text" name="title" /> 
        <br />
        <hr />
            
            <label>Description</label>
                <textarea name="description" cols="30" rows="5"></textarea>
        <br /> 
        <hr />
            
            <label>Adresse</label>
                <input type="text" name="address" />
        <br />
        <hr />
            
            <button  className="btn"  type="submit">Créer</button>

        </form>

        <div className="result">
            <p>RESULT : </p>
            <p>TITLE : {title}</p>
            <p>DESCRIPTION : {description}</p>
            <p>ADDRESS : {address}</p>
        </div>

  </div>

      );
    };
    
    export default CreateCoworking;





    