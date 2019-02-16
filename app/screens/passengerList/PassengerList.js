import React, {Component} from 'react'
import Passenger from '../../components/components/passanger/Passanger'
import { Text, StatusBar, View } from 'react-native'


const avatarImage = require('./doge.png')
// const avatarImage = 'https://facebook.github.io/react-native/docs/assets/favicon.png'


class PassengerList extends Component {

  render() {
    return (

  <View style={{ flex: 1 }}>
    <StatusBar translucent={false} barStyle="default"  />
    
    <View style={{ paddingTop: 20, height: 80, backgroundColor: '#566ada', alignItems:'center', justifyContent: 'center' }}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Passenger List Screen</Text>
    </View>

    <View style={{ flex: 1, padding: 20 }}>

      <Text>Main Traveller</Text>

      <Passenger avatarImage={avatarImage}/>

      <Text>Additional travellers</Text>
      
      <Passenger avatarImage={avatarImage}/>
      <Passenger avatarImage={avatarImage}/>
      <Passenger avatarImage={avatarImage}/>
   
    </View>
  
    </View>
    )
  }

}

export default PassengerList
