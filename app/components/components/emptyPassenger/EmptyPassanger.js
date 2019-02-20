import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const EmptyPassenger = ({ avatarImage, onPress }) => (
    <TouchableOpacity style={styles.passengerContainer} onPress={onPress}>
        <View style={styles.avatar}>
            <Text style={styles.plus}> + </Text>
        </View>
        <View style={styles.passengerDetails}>
            <Text style={styles.passengerText}> Enter Adult X information </Text>
        </View>
        <View style={styles.editButtonContainer}>
            <Text style={styles.arrow}>▶</Text>
        </View>
    </TouchableOpacity>
);

export default EmptyPassenger;
