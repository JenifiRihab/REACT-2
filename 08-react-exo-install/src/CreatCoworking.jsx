const CreateCoworking =() =>{
    const handleSubmit =(event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const description = event.target.description.value;
        const address = event.target.address.value;
             console.log(title + " " + description + " " + address);

    };
    
    return (

        <form className="form" onSubmit={handleSubmit}>

            <label>Titre</label>
                <input type="text" name="title" />
        
            <label>Description</label>
                <textarea name="description" cols="30" rows="5"></textarea>
        
            <label>Adresse</label>
                <input type="text" name="address" />
        
            <button  className="btn"  type="submit">Créer</button>

        </form>

      );
    };
    
    export default CreateCoworking;
