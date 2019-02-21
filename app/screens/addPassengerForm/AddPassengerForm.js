import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Passenger from '../../components/passenger/Passenger';
import { Text, StatusBar, View, FlatList, ScrollView, TextInput } from 'react-native';
import { addPassenger } from '../../actions/passengersActions';

import styles from './style';
import TravellerToChoose from '../../components/travellerToChoose/TravellerToChoose';
import NavigationButton from '../../components/navigationButton/NavigationButton';
import { mockedData } from '../../mock/mockExports';
class AddPassengerForm extends Component {
    constructor(props) {
        super(props);

        this.newTravellerText = 'ENTER TRAVELLER';
        this.headerText = 'Choose from friends, or add new traveller';
        this.addNewTravellerText = 'Add New Traveller';

        this.state = {
            title: '',
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            passportId: '',
            nationality: '',
        };
    }

    _keyExtractor = (item, index) => item.passportId;

    handleAddPassenger = passenger => {
        const { addPassenger, navigation } = this.props;
        addPassenger(passenger, navigation.state.params.passengersIndex);
        navigation.goBack();
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.containerWrapper}>
                <StatusBar barStyle="light-content" />

                <View style={styles.topBar}>
                    <View style={styles.topNavigation}>
                        <NavigationButton text={'◀'} onPress={() => navigation.goBack()} />
                        <Text style={styles.navigationHeader}>{this.newTravellerText}</Text>
                        <NavigationButton text={'Done'} onPress={() => this.handleAddPassenger(this.state)} />
                    </View>

                    <Text style={styles.headerWhite}>{this.headerText}</Text>

                    <FlatList
                        horizontal={true}
                        keyExtractor={this._keyExtractor}
                        data={mockedData}
                        renderItem={({ item }) => (
                            <TravellerToChoose
                                passenger={item}
                                avatarImage={item.avatarImage}
                                onPress={() => this.handleAddPassenger(item)}
                            />
                        )}
                    />
                </View>

                <ScrollView style={styles.newTravellerContainer}>
                    <Text style={styles.header}>{this.addNewTravellerText}</Text>
                    {/* TODO: Text inputs should validate text and accept only given type (i.e. date) */}
                    <TextInput
                        style={styles.textInput}
                        onChangeText={title => this.setState({ title })}
                        value={this.state.title}
                        placeholder={'Title'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={firstName => this.setState({ firstName })}
                        value={this.state.firstName}
                        placeholder={'First Name'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={lastName => this.setState({ lastName })}
                        value={this.state.lastName}
                        placeholder={'Last Name'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={dateOfBirth => this.setState({ dateOfBirth })}
                        value={this.state.dateOfBirth}
                        placeholder={'Date of Birth'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={passportId => this.setState({ passportId })}
                        value={this.state.passportId}
                        placeholder={'Passport ID'}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={nationality => this.setState({ nationality })}
                        value={this.state.nationality}
                        placeholder={'Nationality'}
                    />
                </ScrollView>
            </View>
        );
    }
}

AddPassengerForm.propTypes = {
    navigation: PropTypes.object.isRequired,
    addPassenger: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    addPassenger,
};

export default connect(
    null,
    mapDispatchToProps,
)(AddPassengerForm);
