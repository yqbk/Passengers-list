import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const NavigationButton = ({ text, onPress }) => (
    <TouchableOpacity style={styles.navigationButton} onPress={onPress}>
        <Text style={styles.navigationButtonText}>{text}</Text>
    </TouchableOpacity>
);

NavigationButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
};

export default NavigationButton;
