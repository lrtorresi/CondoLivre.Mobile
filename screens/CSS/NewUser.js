import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFDF',        
    },

    page:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon:{
        left: -150,
        top: -32
    },

    title: {
        backgroundColor: '#201F4B',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        paddingTop: Constants.statusBarHeight + 20,
        color: '#ffffff',
        fontSize: 25,
    },

    form: {
        top: -50,
        padding: 25,       
        width: 370,
    },

    labelText: {
        color: '#201F4B',
        fontSize: 18,
        marginTop: 18,
       
    },

    labelTextJr: {
        color: '#545377',
        fontSize: 15,
    },

    inputForm: {
        backgroundColor: '#ffffff',
        marginTop: 5,
        padding: 10,
        borderRadius: 10,
        width: 320,
        height: 40,
        fontSize: 17,
    },

    button: {
        backgroundColor: '#1F6293',
        marginTop: 20,
        borderRadius: 20,
        width: 320,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },

    link: {
        alignItems: 'center',
        marginTop: 20,
        color: '#201F4B',
    },

    linkNewUser: {        
        fontSize: 17
    },

    linkNewUserUnderLine: {       
        textDecorationLine: 'underline',
    }
})