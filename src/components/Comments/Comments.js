import React, { useState, useEffect } from 'react'
import "./Comments.css"
import axios from 'axios'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }


  useEffect(() => {
    axios.get('http://localhost:4000/comments')
      .then(response => setComments(response.data.response))
  }, [])


  const commentCard = (item) => (
    <div className='comment-profile-container'>
      <div className='pic-and-name'>
        <img className="comment-user-pic" src="https://www.cronica.com.ar/__export/1628282194594/sites/cronica/img/2021/08/06/maxi_2_crop1628279776764.jpg_871115299.jpg" alt="" />
        {/*<img className="comment-user-pic" src={item.user.photo} alt="" /> */}
        {/* <p>{item.user.name}</p> */}
        <p>Enano de Boquita</p>
      </div>
      <div className='comment-container'>
        <p>{item.comment}</p>
      </div>
    </div>
  )

  return (
    <div className='commentsContainer'>
      <button class="commentBTN" onClick={handleOpenMenu}>
        <span class="">Comments</span>
      </button>
      <div className='commentOn'>
        {open
          ? comments?.map(commentCard)
          : null
        }
      </div>
    </div>
  )
}

export default Comments