import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C1922',
        alignItems: 'center'
    },

    logoImg: {
        marginTop: 50
    },

    form: {
        marginTop: 15,
    },

    formImput: {
        marginTop: 12,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 320,
        height: 50,
        fontSize: 17,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#1F6293',
        marginTop: 20,
        borderRadius: 20,
        width: 320,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    linkRecover: {
        marginTop: 15,
        color: '#ffffff',
        fontSize: 16
    },

    linkNewUser: {
        marginTop: 120,
        color: '#ffffff',
        fontSize: 17
    },

    linkNewUserUnderLine: {
       
        textDecorationLine: 'underline',
    }
});