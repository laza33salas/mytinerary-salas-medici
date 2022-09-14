import React, { useState, useEffect } from 'react'
import "./Comments.css"
import axios from 'axios'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [open, setOpen] = useState(false)
    const handleOpenMenu = () =>{
        if (open) {
          setOpen(false)
        }else{
          setOpen(true)
        }
    }


    useEffect( ()=> { 
      axios.get('http://localhost:4000/comments')
      .then( response => setComments(response.data.response))
    }, [])


    const commentCard = (item) => (
      <div> 
        <p>{item.comment}</p>
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