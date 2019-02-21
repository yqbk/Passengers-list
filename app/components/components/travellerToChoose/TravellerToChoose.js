import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const TravellerToChoose = ({ avatarImage, passenger, onPress = false }) => {
    return (
        <TouchableOpacity style={styles.travellerContainer} disabled={!onPress} onPress={onPress}>
            <View style={styles.avatar}>
                <Image source={avatarImage} style={styles.avatarImage} resizeMode="contain" />
            </View>

            <Text style={styles.passengerTextStyle}>{passenger.firstName}</Text>
        </TouchableOpacity>
    );
};

export default TravellerToChoose;
