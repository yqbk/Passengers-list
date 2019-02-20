import React, { Component } from 'react';
import Passenger from '../../components/components/passenger/Passenger';
import { Text, StatusBar, View } from 'react-native';

import styles from './style';
import EmptyPassenger from '../../components/components/emptyPassenger/EmptyPassanger';

import { getTravellerRequest } from '../../actions/travellerActions';
import { connect } from 'react-redux';

const avatarImage = require('./doge.png');

class PassengerList extends Component {
    componentDidMount() {
        console.log('1. component did mount');

        this.props.getTravellerRequest();
        console.log('2. action dispatched');
    }

    renderLoader = () => <Text>Loading...</Text>;

    renderContent = () => {
        const { navigation } = this.props;
        
        return (
            <View>
                <Text style={styles.header}>Main Traveller (this must be you, account holder)</Text>

                <Passenger avatarImage={avatarImage} data={this.props.traveller}/>

                <Text style={styles.header}>Additional travellers</Text>

                <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
                <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
                <EmptyPassenger avatarImage={avatarImage} onPress={() => navigation.navigate('AddPassenger')} />
            </View>
        );
    };

    render() {
        console.log('render: loading', this.props.loading);
        return (
            <View style={{ flex: 1 }}>
                <StatusBar translucent={false} barStyle="light-content" />

                <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>{this.props.loading ? this.renderLoader() : this.renderContent()}</View>
            </View>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       onAddTodo: todo => {
//         dispatch(addTodo(toto));
//       }
//     };
//   };

//   export default connect(
//     null,
//     mapDispatchToProps
//   )(NewTodo);

const mapStateToPros = state => ({
    // calendarChoices: calendarChoices(state),
    // selectedCalendarId: selectedCalendarId(state),
    traveller: state.traveller.traveller,
    loading: state.traveller.loading,
});

const mapDispatchToProps = {
    getTravellerRequest,
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onGetTravellerRequest: () => {
//             dispatch(getTravellerRequest());
//         },
//     };
// };

export default connect(
    mapStateToPros,
    mapDispatchToProps,
)(PassengerList);

// export default PassengerList;
