import React from 'react'

function Profile(props) {
    return (
        <div>
            {props.userProfile.username}
        </div>
    )  
}

export default Profile;