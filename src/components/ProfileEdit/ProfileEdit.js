import React from 'react'
import "./ProfileEdit.css"
import Input from "../Input/Input"
import { useRef, useState } from 'react'
import axios from 'axios'
import { useGetOneUserQuery } from "../../features/actions/usersApi"
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProfileEdit = () => {

    const userObject = useSelector(state => state.user.user)

    const {

        data: users

    } = useGetOneUserQuery(userObject)


    const [value, setValue] = useState(users?._id)

    const inputEditProfile = [
        {
            name: "Photo",
            type: "text",
            value: "",
            placeholder: "Edit Photo"
        },

        {
            name: "Fist Name",
            type: "text",
            value: "",
            placeholder: "Edit Name"
        },

        {
            name: "Last Name",
            type: "text",
            value: "",
            placeholder: "Edit Last Name"
        },

        {
            name: "Country",
            type: "text",
            value: "",
            placeholder: "Edit Country"
        }
    ]

    const modifyProfile = (arrayData) => {
        let formData = arrayData.filter(input => input.value && input.name)

        console.log(formData)

        let data = formData.reduce((values, input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        }, {})

        console.log(data)

        axios.put(`http://localhost:4000/users/${value}`, data)
            .then(res => console.log(res))
            .catch(error => console.log("error"))
    }


    return (
        <div className='inputContainer' key="proEdi">
            {console.log(userObject)}
            <h1 className="titleInputs">Edit Profile</h1>
            <Input inputData={inputEditProfile} event={(arrayData) => modifyProfile(arrayData)}></Input>
        </div>
    )
}

export default ProfileEdit