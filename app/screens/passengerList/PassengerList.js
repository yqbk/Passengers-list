import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, StatusBar, View } from 'react-native';

import Passenger from '../../components/passenger/Passenger';
import EmptyPassenger from '../../components/emptyPassenger/EmptyPassanger';
import { getTravellerRequest } from '../../services/traveller';
import passengers from '../../reducers/passengers';

import styles from './style';

const mockedAvatars = [require('../../mock/avatars/johnny.png'), require('../../mock/avatars/dinosaur.png'), require('../../mock/avatars/bald_guy.png')];

class PassengerList extends Component {
    constructor(props) {
        super(props);

        this.loadingText = 'Loading...';
        this.mainTravellerHeaderText = 'Main Traveller (this must be you, account holder)';
        this.additionalTravellersHeaderText = 'Additional travellers';
    }

    componentDidMount() {
        this.props.getTravellerRequest();
    }

    renderLoader = () => <Text>{this.loadingText}</Text>;

    renderAdditionalTraveller = index => {
        const { navigation, passengers } = this.props;

        return passengers[index] ? (
            <Passenger avatarImage={passengers[index].avatarImage} data={passengers[index]} key={index} />
        ) : (
            <EmptyPassenger onPress={() => navigation.navigate('AddPassenger', { passengersIndex: index })} key={index} passengersIndex={index} />
        );
    };

    renderContent = () => (
        <View>
            <Text style={styles.header}>{this.mainTravellerHeaderText}</Text>
            <Passenger avatarImage={mockedAvatars[0]} data={this.props.traveller} />

            <Text style={styles.header}>{this.additionalTravellersHeaderText}</Text>
            {[...Array(3).keys()].map(passengersIndex => this.renderAdditionalTraveller(passengersIndex))}
        </View>
    );

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="light-content" />
                <View style={styles.mainScreen}>{this.props.loading ? this.renderLoader() : this.renderContent()}</View>
            </View>
        );
    }
}

PassengerList.propTypes = {
    traveller: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    passengers: PropTypes.array,
    getTravellerRequest: PropTypes.func.isRequired,
};

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
