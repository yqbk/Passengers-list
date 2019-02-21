import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Passenger = ({ avatarImage, data }) => {
    // console.log('data = ', data)
    return (
        <View style={styles.passengerContainer}>
            <View style={styles.avatar}>
                <Image source={avatarImage || require('../../../../test_images/avatars/alien.png')} style={styles.avatarImage} />
            </View>

            <View style={styles.passengerDetails}>
                <Text>{data ? `${data.firstName} ${data.lastName}` : 'Error'}</Text>
                <Text>{data ? `${data.title}, ${data.dateOfBirth}` : 'Error'}</Text>
            </View>

            <TouchableOpacity onPress={() => console.log('To be implemented.')} style={styles.editButtonContainer}>
                <Text style={styles.editButton}>Edit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Passenger;
