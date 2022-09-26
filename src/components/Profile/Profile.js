import { Link as LinkRouter, useParams } from "react-router-dom"
import { useGetOneUserQuery } from "../../features/actions/usersApi"
import "./Profile.css"

const Profile = () => {

    const { id } = useParams()
    const {
        data: users,
        isSuccess

    } = useGetOneUserQuery(id)

    return (

        <div className='profile-container'>

                <h2 className='h2-details'>{users?.name} profile:</h2>
            <div className="profile-container">
                <div className="div-profile-pic">
                    <p>Photo: <span> <img className="profile-imagen" src={users?.photo} alt="" /></span></p>
                </div>
                <div className="div-profile">
                    <p>Name: {users?.name}</p>
                </div>
                <div className="div-profile">
                    <p>Last Name: {users?.lastName}</p>
                </div>
                <div className="div-profile">
                    <p>Country: {users?.country}</p>
                </div>
                <LinkRouter userObject={users} className='botonNC BTNP' to={`/edit-Profile/${users?._id}`}>Edit Profile</LinkRouter> 
            </div>
        </div>

    )
}

export default Profile