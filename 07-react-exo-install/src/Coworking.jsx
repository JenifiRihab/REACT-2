const Coworking = ({el}) =>{
    
    return(

        <div >

            <h2>{el.name}</h2>
            <img className="logo2" src="https://th.bing.com/th/id/R.dcbf865113333aa49d212103e467ec92?rik=I8p%2b22S%2bQoBLjQ&pid=ImgRaw&r=0" alt="" />
            <p>Address : {el.address}</p>
            <p>City : {el.city}</p>
            <p>Note : {el.rating}</p>

        </div>
    )
}

export default Coworking