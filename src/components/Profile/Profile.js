// import React from 'react'
// import "./EditCity.css"
// import Input from "../Input/Input"
// import {useState } from 'react'
// import axios from 'axios'
// import { useGetAllCitiesQuery } from "../../features/actions/citiesApi"
// import { useSelector } from "react-redux";
// const Profile = () => {

//   const {

//     data: cities

//   } = useGetAllCitiesQuery("")

//   const rolUsuario = useSelector(state => state.user.user)


//   const [value, setValue] = useState(cities?._id)

  
//   const modifyCity = (arrayData) => {
//     let formData = arrayData.filter(input => input.value && input.name)

//     console.log(formData)

//     let data = formData.reduce((values, input) => {
//       values[input.name.toLowerCase()] = input.value
//       return values
//     }, {})

//     console.log(data)

//     axios.put(`http://localhost:4000/cities/${value}`, data)
//       .then(res => console.log(res))
//       .catch(error => console.log(error))
//   }

//   function viewOptions(city) {
//     return <option value={city._id}>{city.city}
//     </option>
//   }


//   function changeValue() {
//     setValue(valueCity.current.value)
//   }


//   return (
//     <div className='inputContainer'>
//       <h1 className="titleInputs">Edit City</h1>
//       <select className='select-edit-city' onChange={changeValue} ref={valueCity}>{cities?.map(viewOptions)}</select>
//       <Input inputData={inputEditCity} event={(arrayData) => modifyCity(arrayData)}  ></Input>

//     </div>
//   )
// }

// export default Profile