import "./Carousel-cards.css"
import Arrow from "./Arrow"
import {useEffect, useState} from "react"

function Carousel (props){
 
  const range = props.range
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setintervalId] = useState()
  const dataCiudad = props.data
  
  

 const cardCarousel = (item) => (
  <div className="carousel-container">
    <div className="card">
      <img  className="carousel-imagen" src={item.url} alt="" />
      <h3>{item.nombre} </h3>
    </div>
  </div>
 )

useEffect(() => {
  let id = setInterval(function () {
    next()

  }, 4000)

  setintervalId(id)

  return ()=> clearInterval(intervalId);
}, [start])



 function back() {
  if(start >= range){
    setStart(start-range)
    setEnd(end-range)
  }
 }

 function next() {
  if (end < dataCiudad.length){
    setStart(start + range)
    setEnd(end + range)
  }
 }





return (
  <div>
    <div className="slide">
      <Arrow icon={"◄"} click={back}/>
      {dataCiudad.slice(start,end).map(cardCarousel)}
      <Arrow icon={"►"} click={next}/>
    </div>
  </div>
)

}
export default Carousel