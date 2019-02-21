import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import { Text, StatusBar, View } from 'react-native';

import styles from './style';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';

import { getTravellerRequest } from '../../services/traveller';
import { connect } from 'react-redux';
import passengers from '../../reducers/passengers';

const avatarImage = require('./doge.png');

const mockedAvatars = [
    require('../../../test_images/avatars/johnny.png'),
    require('../../../test_images/avatars/dinosaur.png'),
    require('../../../test_images/avatars/bald_guy.png'),
];

class PassengerList extends Component {
    componentDidMount() {
        this.props.getTravellerRequest();
    }

    renderLoader = () => <Text>Loading...</Text>;

    renderAdditionalTraveller = passengersIndex => {
        const { navigation, passengers } = this.props;

        return passengers[passengersIndex] ? (
            <Passenger avatarImage={passengers[passengersIndex].avatarImage} data={passengers[passengersIndex]} key={passengersIndex} />
        ) : (
            <EmptyPassenger
                avatarImage={avatarImage}
                onPress={() => navigation.navigate('AddPassenger', { passengersIndex: passengersIndex })}
                key={passengersIndex}
                passengersIndex={passengersIndex}
            />
        );
    };

    renderContent = () => (
        <View>
            <Text style={styles.header}>Main Traveller (this must be you, account holder)</Text>
            <Passenger avatarImage={avatarImage} data={this.props.traveller} />

            <Text style={styles.header}>Additional travellers</Text>
            {[...Array(3).keys()].map(passengersIndex => this.renderAdditionalTraveller(passengersIndex))}
        </View>
    );

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />

                <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>{this.props.loading ? this.renderLoader() : this.renderContent()}</View>
            </View>
        );
    }
}
const mapStateToPros = state => ({
    traveller: state.traveller.traveller,
    loading: state.traveller.loading,
    passengers: state.passengers.passengers,
});

const mapDispatchToProps = {
    getTravellerRequest,
};

export default connect(
    mapStateToPros,
    mapDispatchToProps,
)(PassengerList);
