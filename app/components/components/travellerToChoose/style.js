import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    travellerContainer: {
        flex: 0,
        // flexDirection: 'column',
        borderColor: 'black',
        // paddingVertical: 20,
        // height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    avatarImage: {
        width: 30,
        height: 30,
    },

    passengerTextStyle: {
        paddingTop: 5,
        color: 'white',
        fontSize: 10,
    }

    // passengerDetails: {
    //     flex: 1,
    //     paddingHorizontal: 20,
    // },

    // editButtonContainer: {
    //     height: 30,
    //     borderRadius: 5,
    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     opacity: 0.7,
    // },

    // editButton: {
    //     color: 'white',
    //     fontSize: 14,
    //     fontWeight: 'bold',
    //     paddingHorizontal: 20,
    // },
});
