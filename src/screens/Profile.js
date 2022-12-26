import React, { useState } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import ProfileDetailDesign from '../components/ProfileDetailDesign'
import ProfileEditDesign from '../components/ProfileEditDesign'
import UsersApi from '../Networking/ConnectApi'

const Profile = () => {
  const [profileData, setProfileData] = useState([])
  return (
  <>
   <UsersApi setProfileData={setProfileData}/>
   <ProfileEditDesign/>
   <ProfileDetailDesign/>
    {console.warn(profileData)}
    <Text>{profileData[0].firstName}</Text>
    <Text>{profileData[0].lastName}</Text>
    <Text>{profileData[0].userName}</Text>
    <Text>{profileData[0].email}</Text>
    <Text>{profileData[0].postcode}</Text>
    <Text>{profileData[0].country}</Text>
  </> 
  )
}

export default Profile  