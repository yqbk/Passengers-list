import {
    StyleSheet
} from 'react-native';

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
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.6
    },

    avatarImage: {
        width: 30,
        height: 30,
    },

    passengerDetails: {
        flex: 1,
        paddingHorizontal: 20,
    },

    editButtonContainer: {
        height: 30,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7
    },

    editButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 20
    }
});