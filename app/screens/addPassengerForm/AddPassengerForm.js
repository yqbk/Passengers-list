import React, { Component } from 'react';
import { connect } from 'react-redux';
import Passenger from '../../components/passenger/Passenger';
import { Text, StatusBar, View, FlatList, ScrollView, TextInput } from 'react-native';
import { addPassenger } from '../../actions/passengersActions';

import styles from './style';
import TravellerToChoose from '../../components/travellerToChoose/TravellerToChoose';
import NavigationButton from '../../components/navigationButton/NavigationButton';

const mockedData = [
    {
        title: 'Mr',
        firstName: 'Timothy',
        lastName: 'D.',
        dateOfBirth: '1999-01-01',
        avatarImage: require('../../mock/avatars/johnny.png'),
        passportId: '123',
    },
    {
        title: 'Mr',
        firstName: 'Josep',
        lastName: 'A.',
        dateOfBirth: '1999-01-01',
        avatarImage: require('../../mock/avatars/dinosaur.png'),
        passportId: '456',
    },
    {
        title: 'Mr',
        firstName: 'Philippe',
        lastName: 'S.',
        dateOfBirth: '1999-01-01',
        avatarImage: require('../../mock/avatars/bald_guy.png'),
        passportId: '567',
    },
    {
        title: 'Mr',
        firstName: 'Nicklas',
        lastName: 'H.',
        dateOfBirth: '1999-01-01',
        avatarImage: require('../../mock/avatars/black_guy.png'),
        passportId: '890',
    },
];
class AddPassengerForm extends Component {
    constructor(props) {
        super(props);

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
        console.log('this.props.navigation.state.params', this.props.navigation.state.params);
        this.props.addPassenger(passenger, this.props.navigation.state.params.passengersIndex);
        this.props.navigation.goBack();
    };

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
                    <View style={styles.topNavigation}>
                        <NavigationButton text={'◀'} onPress={() => navigation.goBack()} />
                        <Text style={styles.navigationHeader}>ENTER TRAVELLER</Text>
                        <NavigationButton text={'Done'} onPress={() => this.handleAddPassenger(this.state)} />
                    </View>

                    <Text style={styles.headerWhite}>Choose from friends, or add new traveller</Text>
                    <FlatList
                        horizontal={true}
                        keyExtractor={this._keyExtractor}
                        data={mockedData}
                        renderItem={({ item }) => {
                            return <TravellerToChoose passenger={item} avatarImage={item.avatarImage} onPress={() => this.handleAddPassenger(item)} />;
                        }}
                    />
                </View>

                <ScrollView
                    style={{
                        flex: 1,
                        padding: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <Text style={styles.header}>Add New Traveller</Text>
                    <TextInput style={styles.textInput} onChangeText={title => this.setState({ title })} value={this.state.title} placeholder={'Title'} />
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

const mapDispatchToProps = {
    addPassenger,
};

export default connect(
    null,
    mapDispatchToProps,
)(AddPassengerForm);
