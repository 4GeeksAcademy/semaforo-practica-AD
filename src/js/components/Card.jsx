export const Card = ({personaje, imagenMostrar}) => {
    console.log(personaje);
    
return (
    <div className={`card mx-auto bg-${personaje.color
        
    }`} style={{maxWidth: "400px"}}>
        <img src={imagenMostrar} className="card-img-top object-fit-cover" alt="" style={{height: "600px", objectPosition: "top"}} />
        <div className="card-body">
            <h5 className="card-title">{personaje.nombre}</h5>
            <p className="card-text text-dark">{personaje.frase}</p>
        </div>
    </div>
)
}