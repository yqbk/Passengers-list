import React, {Component} from 'react'
import Passenger from '../../components/components/passenger/Passenger'
import { Text, StatusBar, View } from 'react-native'

import styles from './style'
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';


const avatarImage = require('./doge.png')
// const avatarImage = 'https://facebook.github.io/react-native/docs/assets/favicon.png'


class PassengerList extends Component {

  render() {
    return (

  <View style={{ flex: 1 }}>
    <StatusBar translucent={false} barStyle="default"  />
    
    <View style={{ paddingTop: 20, height: 60, backgroundColor: '#566ada', alignItems:'center', justifyContent: 'center' }}>
      <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold', paddingBottom: 10,}}>WHO'S TRAVELLING?</Text>
    </View>

    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>

      <Text style={styles.header}>Main Traveller (this must be you, account holder)</Text>

      <Passenger avatarImage={avatarImage}/>

      <Text style={styles.header}>Additional travellers</Text>
      
      <EmptyPassenger avatarImage={avatarImage}/>
      <EmptyPassenger avatarImage={avatarImage}/>
      <EmptyPassenger avatarImage={avatarImage}/>
   
    </View>
  
    </View>
    )
  }

}

export default PassengerList
