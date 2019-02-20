import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const NavigationButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.navigationButton} onPress={onPress}>
        <Text style={styles.navigationButtonText}>{text}</Text>
    </TouchableOpacity>
);

export default NavigationButton;
