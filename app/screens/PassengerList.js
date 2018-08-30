import React from 'react'
import { Text, StatusBar, View } from 'react-native'

const PassengerList = ({ navigation, dispatch }) => (
  <View style={{ flex: 1 }}>
    <StatusBar translucent={false} barStyle="default" />
    <View style={{ paddingTop: 20 }}>
      <Text>Passenger List Screen</Text>
    </View>
  </View>
)

export default PassengerList
