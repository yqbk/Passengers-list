import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';
import { Text, StatusBar, View } from 'react-native';

import styles from './style';

class AddPassengerForm extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="default" />

                <View
                    style={{
                        flex: 1,
                        padding: 20,
                        backgroundColor: 'white',
                    }}
                />


            </View>
        );
    }
}

export default AddPassengerForm;
