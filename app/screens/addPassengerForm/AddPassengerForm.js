import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';
import { Text, StatusBar, View, FlatList } from 'react-native';

import styles from './style';
import TravellerToChoose from '../../components/components/travellerToChoose/TravellerToChoose';

const avatarImage = require('./doge.png');

class AddPassengerForm extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />

                <View
                    style={{
                        flex: 0,
                        paddingVertical: 20,
                        backgroundColor: '#ff5243',
                    }}
                >
                    <Text style={styles.headerWhite}>Choose from friends, or add new traveller</Text>
                    <FlatList
                        horizontal={true}
                        data={[
                            { passenger: 'Timothy 1.', avatarImage: avatarImage },
                            { passenger: 'Timothy 2.', avatarImage: avatarImage },
                            { passenger: 'Timothy 3.', avatarImage: avatarImage },
                            { passenger: 'Timothy 4.', avatarImage: avatarImage },
                        ]}
                        renderItem={({ passenger, avatar }) => (
                            <TravellerToChoose passenger={passenger} avatarImage={avatarImage} />
                        )}
                    />>
                </View>

                <View
                    style={{
                        flex: 1,
                        padding: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <Text style={styles.header}>Add New Traveller</Text>
                </View>
            </View>
        );
    }
}

export default AddPassengerForm;
