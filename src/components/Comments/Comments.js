import React, { useState } from 'react'
import "./Comments.css"

const Comments = () => {
    const [open, setOpen] = useState(false)
    const handleOpenMenu = () =>{
        if (open) {
          setOpen(false)
        }else{
          setOpen(true)
        }
    }

  return (
    <div className='commentsContainer'>
        <button class="commentBTN" onClick={handleOpenMenu}>
         <span class="">Comments</span>
        </button>
        <div className='commentOn'>
            {open
            ? <p>Mapear Comentarios</p>
            : null
            }
        </div>
    </div>
  )
}

export default Comments