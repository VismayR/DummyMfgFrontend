import React from 'react'
import { Text } from 'react-native'
import HomeTabs from '../components/HomeTabs'
import { HomeConst } from '../constant/Home'

export const Home = () => {
  return (
    <>
      <Text>{HomeConst}</Text>
      <HomeTabs/>
    </>
  )
}
