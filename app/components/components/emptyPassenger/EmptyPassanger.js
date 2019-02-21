import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const emptyPassengerText = index => `Enter Adult ${index + 1} information`;

const EmptyPassenger = ({ onPress, passengersIndex }) => (
    <TouchableOpacity style={styles.passengerContainer} onPress={onPress}>
        <View style={styles.avatar}>
            <Text style={styles.plus}> + </Text>
        </View>

        <View style={styles.passengerDetails}>
            <Text style={styles.passengerText}>{emptyPassengerText(passengersIndex)}</Text>
        </View>

        <View style={styles.arrowButtonContainer}>
            <Text style={styles.arrow}>▶</Text>
        </View>
    </TouchableOpacity>
);

EmptyPassenger.propTypes = {
    onPress: PropTypes.func.isRequired,
    passengersIndex: PropTypes.number.isRequired,
};

export default EmptyPassenger;
