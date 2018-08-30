import { createStackNavigator } from 'react-navigation'

import PassengerList from '../screens/PassengerList'

export default createStackNavigator(
  {
    Home: {
      screen: PassengerList,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
  },
  {
    headerMode: 'screen',
  },
)
