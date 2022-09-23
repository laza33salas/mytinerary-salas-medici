import React, {useState } from "react"
import './Likes.css'


const Likes = (props) => {
    let likes = props.likes
    let id = props._id
   

    const cantLikes = 0
    const fullHeart = "https://w7.pngwing.com/pngs/437/274/png-transparent-heart-red-heart.png"
    const emptyHeart = "https://img1.freepng.es/20180516/vce/kisspng-computer-icons-encapsulated-postscript-5afbb222949223.9344406515264445786086.jpg"
    const [image, setImage] = useState(true)
    const handleImage = () => {
        if (image) {
            setImage(false)
        } else {
            setImage(true)
        }
    }

    return (
        <div>
            {image
                ? <button onClick={handleImage}><img className="image-like" src={emptyHeart} alt="heart-like"></img></button>
                : <button onClick={handleImage}><img className="image-like" src={fullHeart} alt="heart-like"></img></button>
            }
        </div>
    )
}

export default Likes