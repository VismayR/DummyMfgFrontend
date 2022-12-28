import React from 'react'
import { Text } from 'react-native'
import { electricVehicleAvailability } from '../constant/ElectricVehicle'

const ElectricVehicle = () => {
  return (
    <Text style={{fontWeight:'700', textAlign:'center'}}>{electricVehicleAvailability}</Text>
  )
}

export default ElectricVehicle