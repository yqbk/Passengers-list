import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';
import { Text, StatusBar, View, FlatList, ScrollView, TextInput } from 'react-native';

import styles from './style';
import TravellerToChoose from '../../components/components/travellerToChoose/TravellerToChoose';
import NavigationButton from '../../components/components/navigationButton/NavigationButton';

// const avatarImage = require('../../../test_images/avatars/alien.png');
// const avatarImage = require('../../../test_images/avatars/black_guy.png');

const mockedData = [
    { name: 'Timothy D.', avatarImage: require('../../../test_images/avatars/johnny.png'), passportId: '123' },
    { name: 'Josep A.', avatarImage: require('../../../test_images/avatars/dinosaur.png'), passportId: '456' },
    { name: 'Philippe S.', avatarImage: require('../../../test_images/avatars/bald_guy.png'), passportId: '567' },
    { name: 'Nicklas H.', avatarImage: require('../../../test_images/avatars/black_guy.png'), passportId: '890' },
];

class AddPassengerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            passportId: '',
            nationality: '',
        };
    }

    _keyExtractor = (item, index) => item.passportId;

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
                        <NavigationButton text={'Done'} />
                    </View>

                    <Text style={styles.headerWhite}>Choose from friends, or add new traveller</Text>
                    <FlatList
                        horizontal={true}
                        keyExtractor={this._keyExtractor}
                        data={mockedData}
                        // data={[{ key: 'a' }, { key: 'b' }]}
                        renderItem={({ item }) => {
                            console.log(item);
                            return <TravellerToChoose passenger={item} avatarImage={item.avatarImage} onPress={() => navigation.goBack()} />;
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
                        onChangeText={birthDate => this.setState({ birthDate })}
                        value={this.state.birthDate}
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

export default AddPassengerForm;
