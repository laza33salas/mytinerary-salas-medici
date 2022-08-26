import React from 'react'
import "./Cities.css"

const Cities = (props) => {
  const dataCiudad = props.data

  const cards = (item) => (
    <div className="card-container">
      <div className="card">
        <img  className="card-imagen" src={item.url} alt="" />
        <h3 className='card-tittle'>{item.nombre} </h3>
      </div>
    </div>
   )
  
  
  return (
    <div className='cities-container'>
      {dataCiudad.map(cards)}
    </div>
  )
}

export default Cities