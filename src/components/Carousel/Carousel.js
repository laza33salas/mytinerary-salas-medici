import "./Carousel-cards.css"
import Arrow from "./Arrow"
import {useEffect, useState} from "react"
import {Link as LinkRouter} from "react-router-dom"

function Carousel (props){
 
  const range = props.range
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + range)
  const [intervalId, setintervalId] = useState()
  const cities = props.data



 const cardCarousel = (data) => (
  <div className="carousel-container">
    <div className="carousel-card">
    <LinkRouter to={`/Cities/${data._id}`}>
    <img  className="carousel-imagen" src={data.photo} alt="" />
    </LinkRouter>
      <h3 className="carousel-card-tittle">{data.city} </h3>
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
  } else {
    setStart(8)
    setEnd(12)
  }
 }

 function next() {
  if (end < cities?.length){
    setEnd(end + range)
    setStart(start + range)
  } else {
    setStart(0)
    setEnd(range)
  }
 }

 

return (
  <div className="container-carousel">
      <Arrow icon={"◄ Back"} click={back}/>
    <div className="slide">
      {cities?.slice(start,end).map(cardCarousel)}
    </div>
      <Arrow icon={"Next ►"} click={next}/>
  </div>
)

}
export default Carousel