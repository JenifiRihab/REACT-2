const Coworking = ({element}) =>{
    return(
        <div className="Article">
        <h2>{element.name}</h2>
        <img className="logo2" src="https://th.bing.com/th/id/R.dcbf865113333aa49d212103e467ec92?rik=I8p%2b22S%2bQoBLjQ&pid=ImgRaw&r=0" alt="" />
        <p>Address : {element.address}</p>
        <p>City : {element.city}</p>
        <p>Note : {element.rating}</p>
        </div>
    )
}

export default Coworking