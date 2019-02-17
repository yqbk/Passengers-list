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
        opacity: 0.6,
    },

    plus: {
        // width:32,
        // height: 32,
        fontSize: 32,
        color: '#00b1e8',
        // borderWidth: 1,
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

    editButtonContainer: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
    },

    arrow: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
});
