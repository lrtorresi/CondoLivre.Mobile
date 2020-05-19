import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import style from '../screens/CSS/Login';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, StackNavigator } from '@react-navigation/native';
import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class App extends React.Component {

    static navigationOptions = {
        title: 'Login',
    }

    LoginButtonPress() {
        this.props.navigation.navigate('Home'); // navigate to List screen!
    }

    RecoverButtonPress() {
        this.props.navigation.navigate('RecoverScreen'); // navigate to List screen!
    }

    NewUserButtonPress() {
        this.props.navigation.navigate('NewUserScreen'); // navigate to List screen!
    }



    render() {
        return (

            <KeyboardAvoidingView style={style.container} enabled={Platform.OS == 'ios'} behavior={Platform.select({ ios: 'padding', android: null, })}>

                <View style={style.logoImg}>
                    <Image source={require('../assets/images/Logo.png')} />
                </View>

                <View style={style.form}>

                    <TextInput
                        style={style.formImput}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType={"go"}
                    /*  value={}
                     onChangeText={} */
                    />
                    <TextInput
                        style={style.formImput}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                        password={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType={"go"}
                    /* value={}
                    onChangeText={} */
                    />

                    <View style={style.button}>
                        <TouchableOpacity onPress={this.LoginButtonPress.bind(this)}>
                            <Text style={style.buttonText}>ENTRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={this.RecoverButtonPress.bind(this)}>
                    <Text style={style.linkRecover}>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.NewUserButtonPress.bind(this)}>
                    <Text style={style.linkNewUser}>Ainda não tem conta? <Text style={style.linkNewUserUnderLine}>Cadastre-se</Text></Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>


        );
    }
}


