import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topNavigation: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    navigationHeader: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
    },

    header: {
        fontWeight: '900',
        fontSize: 12,
        paddingVertical: 10,
    },

    headerWhite: {
        fontWeight: '600',
        fontSize: 12,
        paddingVertical: 10,
        color: 'white',
        paddingLeft: 20,
    },

    textInput: {
        height: 60,
        backgroundColor: '#f2f2f4',
        borderRadius: 10,
        padding: 10,
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 10,
    },
});
