import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    passengerContainer: {
        flex: 0,
        flexDirection: 'row',
        borderColor: 'black',
        paddingVertical: 20,
        height: 80,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#00b1e8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    plus: {
        fontSize: 32,
        color: '#00b1e8',
        textAlign: 'center',
        textAlignVertical: 'center',
    },

    passengerDetails: {
        flex: 1,
        paddingHorizontal: 20,
    },

    passengerText: {
        fontSize: 11,
    },

    arrowButtonContainer: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
    },

    arrow: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        opacity: 0.7,
    },
});
