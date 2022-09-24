import React, {useState, useEffect } from "react"
import { useLikeDislikeMutation } from '../../features/actions/ItinerariosApi'
import './Likes.css'


const Likes = (props) => { //Por prosp el itinerario

    const [ likeDislike ] = useLikeDislikeMutation()
    const id = props.itinerary._id
    const cantLikes = props.itinerary.likes.length
    const [likesItinerary, setLikes] = useState(cantLikes)
    const fullHeart = "https://w7.pngwing.com/pngs/437/274/png-transparent-heart-red-heart.png"
    const emptyHeart = "https://img1.freepng.es/20180516/vce/kisspng-computer-icons-encapsulated-postscript-5afbb222949223.9344406515264445786086.jpg"
    const [image, setImage] = useState(true)
    
    const handleImage = () => {
        like()
        if (cantLikes > 0) {
            setImage(false)
        } else {
            setImage(true)
        }
    }

    useEffect(()=>{
        handleImage()
    }, [cantLikes])


    async function like() {
        if (localStorage.getItem('token')) {
            try {
                let res = await likeDislike(id)
                if (res.data?.success) {
                    console.log(res.data)
                   // setReload(!reload)
                } else {
                    console.log(res.error)
                }
            } catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            {image
                ? <button onClick={handleImage}><img className="image-like" src={emptyHeart} alt="heart-like"></img></button>
                : <button onClick={handleImage}><img className="image-like" src={fullHeart} alt="heart-like"></img></button>
            }
            {cantLikes}
        </div>
    )
}

export default Likes