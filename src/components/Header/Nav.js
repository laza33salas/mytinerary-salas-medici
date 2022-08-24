
import {Link as LinkRouter } from 'react-router-dom'
import "./Nav.css"

const pages = [
  {name: "Home", to:"/", imagen:"https://cdn-icons-png.flaticon.com/512/2413/2413074.png", alt:"casa"},
  {name: "Cities", to:"/cities", imagen:"https://cdn-icons-png.flaticon.com/512/2222/2222208.png",alt:"cities"},
  {name: "NewCity", to:"/newcity", imagen:"https://cdn-icons-png.flaticon.com/512/2451/2451548.png", alt:"newcity"},
]

const link = (page) =>
<LinkRouter className="containerLinks" to={page.to}>
  { <img alt={page.alt}  className="logos" src={page.imagen}/>}
 <p className='parrafos'>{page.name}</p>  
 </LinkRouter>


const Nav = () => {
 
  return (
    <div className='nav'>
        {pages.map(link)}
    </div>
  )
}

export default Nav