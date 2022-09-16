import React from 'react'

const Alert = (props) => {

    const alertFunction = () => {
        alert(props.message);
       } 
    return (
      <button ref={props.reff} className={props.classNamee} type='submit' onClick={alertFunction}>Send</button>
  )
}

export default Alert