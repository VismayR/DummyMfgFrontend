import React, { useState } from 'react'
import { Text } from 'react-native'
import UsersApi from '../Networking/ConnectApi'

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  return (
  <>
   <UsersApi setProfileData={setProfileData}/>
    {console.warn(profileData)}
  </>
   
  )
}

export default Profile