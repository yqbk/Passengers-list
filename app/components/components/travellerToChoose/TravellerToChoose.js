import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const TravellerToChoose = ({ avatarImage, passenger, onPress = null }) => (
    <TouchableOpacity style={styles.travellerContainer} disabled={!onPress} onPress={onPress}>
        <View style={styles.avatar}>
            <Image source={avatarImage} style={styles.avatarImage} resizeMode="contain" />
        </View>

        <Text style={styles.passengerTextStyle}>{passenger.firstName}</Text>
    </TouchableOpacity>
);

TravellerToChoose.propTypes = {
    avatarImage: PropTypes.number.isRequired,
    passenger: PropTypes.object.isRequired,
    onPress: PropTypes.func,
};

export default TravellerToChoose;
