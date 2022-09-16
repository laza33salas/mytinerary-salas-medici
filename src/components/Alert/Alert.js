import React from 'react'

const Alert = (props) => {
  
    const alertFunction = () => {
        alert(props.message);
       } 
    return (
    <>
    {alertFunction}
    </>
  )
}

export default Alert