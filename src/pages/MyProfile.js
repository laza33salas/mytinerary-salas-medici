import React from 'react'
import { useParams } from 'react-router-dom'
import Profile from "../components/Profile/Profile"

const MyProfile = () => {
  const {id}= useParams()


  return (
    <Profile/>
  )
}

export default MyProfile