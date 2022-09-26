import React from 'react'
import {useEffect, useState} from "react"
import './Alert.css'

const Alert = (props) => {

  const [show, setOpen] = useState(false) //Se crea un ternario para mostrar u ocultar algo.
  const handleOpenMenu = () => {
      setOpen(true)
  }
  
  useEffect(() => {
    setTimeout(() => {
      setOpen(false) //Cierra la alerta
    },4000);
  });

    return (
      <div>
        <button ref={props.reff} className={props.classNamee} onClick={handleOpenMenu} type='submit'>Send</button>
        {show //Se usa el ternario para mostrar y ocultar la alerta.
          ? <dialog open className='alertOn'>{props.message}</dialog>
          : null
        }
      </div>
  )
}

export default Alert