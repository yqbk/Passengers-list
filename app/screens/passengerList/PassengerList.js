import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import { Text, StatusBar, View } from 'react-native';

import styles from './style';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';

const avatarImage = require('./doge.png');

class PassengerList extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />

                <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
                    <Text style={styles.header}>Main Traveller (this must be you, account holder)</Text>

                    <Passenger avatarImage={avatarImage} />

                    <Text style={styles.header}>Additional travellers</Text>

                    <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
                    <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
                    <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
                </View>
            </View>
        );
    }
}

export default PassengerList;
