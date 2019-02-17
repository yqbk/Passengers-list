import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Passenger = ({ avatarImage }) => (
    <View style={styles.passengerContainer}>
        <View style={styles.avatar}>
            <Image source={avatarImage} style={styles.avatarImage} />
        </View>

        <View style={styles.passengerDetails}>
            <Text>Jakub Syrek</Text>
            <Text>Male, 26 July 1994</Text>
        </View>

        <TouchableOpacity onPress={() => console.log(avatarImage)} style={styles.editButtonContainer}>
            <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
    </View>
);

export default Passenger;
