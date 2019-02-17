import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const EmptyPassenger = ({ avatarImage }) => (
    <TouchableOpacity  style={styles.passengerContainer} onPress={() => console.log('pressed')}>
               
               <View style={styles.avatar}>
                    <Text style={styles.plus}>+</Text>
               </View>

               <View style={styles.passengerDetails}>
                    <Text style={styles.passengerText}>Enter Adult X information</Text>
               </View>

               <TouchableOpacity  onPress={() => console.log(avatarImage)} style={styles.editButtonContainer}>
                    <Text style={styles.editButton}>></Text>
               </TouchableOpacity>

    </TouchableOpacity>
  )

export default EmptyPassenger;
