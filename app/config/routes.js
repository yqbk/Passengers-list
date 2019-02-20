import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PassengerList from '../screens/passengerList/PassengerList';
import AddPassengerForm from '../screens/addPassengerForm/AddPassengerForm';
import NavigationButton from '../components/components/navigationButton/NavigationButton';
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
            navigationOptions: props => {
                const { navigation } = props;
                return {
                    header: null
                    // headerTitle: 'ENTER TRAVELLER',
                    // headerTitleStyle: styles.headerTitleStyle,
                    // headerStyle: styles.redHeaderStyle,

                    // // headerBackTitleStyle: styles.headerTitleStyle,

                    // headerLeft: <NavigationButton text="<" onPress={() => navigation.goBack()} />,
                    // headerRight: <NavigationButton text="Done" onPress={() => console.log('back')} />,
                };
            },
        },
    },
    {
        headerMode: 'screen',
    },
);
