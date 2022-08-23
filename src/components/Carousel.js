import "../styles/Carousel-cards.css"
function Carousel (props){
 
  const range = 4
  const start = 0
  const end = start + range
  const dataCiudad = props.data
  
  

 const cardCarousel = (item) => (
  <div className="carousel-container">
    <div className="card">
      <img  className="carousel-imagen" src={item.url} alt="" />
      <h3>{item.nombre} </h3>
    </div>
  </div>
 )


return (
  <div>
    <div className="slide">
      {dataCiudad.slice(start,end).map(cardCarousel)}
    </div>
  </div>
)

}
export default Carousel