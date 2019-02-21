import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const defaultAvatarImage = require('../../../../test_images/avatars/alien.png');
const editText = 'Edit';

const Passenger = ({ avatarImage, data }) => (
    <View style={styles.passengerContainer}>
        <View style={styles.avatar}>
            <Image source={avatarImage} style={styles.avatarImage} />
        </View>

        <View style={styles.passengerDetails}>
            <Text>{data ? `${data.firstName} ${data.lastName}` : 'Error'}</Text>
            <Text>{data ? `${data.title}, ${data.dateOfBirth}` : 'Error'}</Text>
        </View>

        <TouchableOpacity onPress={() => console.log('To be implemented.')} style={styles.editButtonContainer}>
            <Text style={styles.editButton}>{editText}</Text>
        </TouchableOpacity>
    </View>
);

Passenger.propTypes = {
    avatarImage: PropTypes.number,
    data: PropTypes.object.isRequired,
};

Passenger.defaultProps = {
    avatarImage: defaultAvatarImage,
};

export default Passenger;
