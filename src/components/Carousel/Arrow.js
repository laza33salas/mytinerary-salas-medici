
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
        <button onClick={props.click}>      
                {props.icon}
        </button>
    )
}

export default Arrow