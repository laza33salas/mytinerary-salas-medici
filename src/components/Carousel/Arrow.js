import "./Arrow.css"
function Arrow(props) {

    if (!props.icon) {
        if(!props.click){
            throw new Error("Se requiere un string para la propiedad icom") 
        }
    }

    if (!props.click) {
        if(!props.icon){
            throw new Error("Se requiere un string para la propiedad icom") 
        }
    }

    
    return (
        <div className="container-boton">
            <button className="button-pibes" onClick={props.click}>      
            <span>{props.icon}</span>
        </button>

        </div>
    )
}

export default Arrow