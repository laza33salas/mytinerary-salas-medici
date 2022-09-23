
import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./Nav.css"

const Nav = () => {

  const rolUsuario = useSelector(state => state.user.user.role)//Agarra desde el storage el rol.
  let[pages, setPages] = useState([])

  if (rolUsuario == 'admin') {
    pages = [
      { name: "Home", to: "/", imagen: "https://cdn-icons-png.flaticon.com/512/2413/2413074.png", alt: "casa" },
      { name: "Cities", to: "/cities", imagen: "https://cdn-icons-png.flaticon.com/512/2222/2222208.png", alt: "cities" },
      { name: "New City", to: "/newcity", imagen: "https://cdn-icons-png.flaticon.com/512/2451/2451548.png", alt: "new-city" },
      { name: "Edit City", to: "/edit-city", imagen: "https://cdn-icons-png.flaticon.com/512/2451/2451548.png", alt: "edit-city" },
      { name: "MyTinerary", to: "/myTineraries", imagen: "https://cdn-icons-png.flaticon.com/512/2451/2451548.png", alt: "MyTinerary" }
    ]
  } else if (rolUsuario == 'user') {
    pages = [
      { name: "Home", to: "/", imagen: "https://cdn-icons-png.flaticon.com/512/2413/2413074.png", alt: "casa" },
      { name: "Cities", to: "/cities", imagen: "https://cdn-icons-png.flaticon.com/512/2222/2222208.png", alt: "cities" },
      { name: "MyTinerary", to: "/myTineraries", imagen: "https://cdn-icons-png.flaticon.com/512/2451/2451548.png", alt: "MyTinerary" }
    ]
  } else {
    pages = [
      { name: "Home", to: "/", imagen: "https://cdn-icons-png.flaticon.com/512/2413/2413074.png", alt: "casa" },
      { name: "Cities", to: "/cities", imagen: "https://cdn-icons-png.flaticon.com/512/2222/2222208.png", alt: "cities" },
    ]
  }

  const link = (page) =>
    <LinkRouter className="containerLinks" to={page.to}>
      {<img alt={page.alt} className={"logos " + page.alt} src={page.imagen} />}
      <p className='parrafos'>{page.name}</p>
    </LinkRouter>

  // BURGER BUTTON 
  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    setPages(pages)
  },[pages])

  return (
    <div className='nav'>
      <button class="btn" onClick={handleOpenMenu}>
        <span class="btn__visible">☰</span>
        <span class="btn__invisible">Menu</span>
      </button>
      <div className='burgerOn'>
        {open
          ? pages.map(link)
          : null
        }
      </div>

      <div className='burgerOff'>
        {pages.map(link)}
      </div>
    </div>
  )
}

export default Nav