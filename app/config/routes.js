import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PassengerList from '../screens/passengerList/PassengerList';
import AddPassengerForm from '../screens/addPassengerForm/AddPassengerForm';
import NavigationButton from '../components/navigationButton/NavigationButton';
import { styles } from './style';

export default createStackNavigator(
    {
        Home: {
            screen: PassengerList,
            navigationOptions: {
                headerTitle: "WHO'S TRAVELLING?",
                headerTitleStyle: styles.headerTitleStyle,
                headerStyle: styles.headerStyle,
            },
        },

        AddPassenger: {
            screen: AddPassengerForm,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        headerMode: 'screen',
    },
);
