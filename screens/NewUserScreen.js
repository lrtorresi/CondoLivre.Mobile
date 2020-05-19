import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Feather } from '@expo/vector-icons'
import style from './CSS/NewUser';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation, StackNavigator } from '@react-navigation/native';
import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class NewUserPassword extends React.Component {

    LoginButtonPress() {
        this.props.navigation.navigate('Login'); // navigate to Login screen!
    }

    render() {
        return (

            <KeyboardAwareScrollView idingView style={style.container} behavior="padding" resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={style.container}
                enableOnAndroid={true} scrollEnabled={false} >

                <View style={style.page}>
                    <View style={style.title}>
                        <Text style={style.titleText}>Cadastrar</Text>
                    </View>

                    <View style={style.icon}>
                    <TouchableOpacity onPress={this.LoginButtonPress.bind(this)}>   
                        <Feather style={style.imglist} name="chevron-left" size={32} color="#ffffff" />
                        </TouchableOpacity>
                    </View>

                    <View style={style.form}>

                        <Text style={style.labelText}>{'Nome: '}<Text style={style.labelTextJr}>{' Preencha seu nome completo.'}</Text></Text>
                        <TextInput style={style.inputForm}
                            placeholder="Ex.: Pedro Guilherme"
                            returnKeyType={"go"}
                        />

                        <Text style={style.labelText}>{'Telefone: '}<Text style={style.labelTextJr}>{' Preencha seu telefone.'}</Text></Text>
                        <TextInput style={style.inputForm}
                            placeholder="Ex.: (21) 99998-9999"
                            returnKeyType={"go"}
                        />

                        <Text style={style.labelText}>{'E-mail: '}<Text style={style.labelTextJr}>{' Enviaremos um e-mail de confirmação de cadastro.'}</Text></Text>
                        <TextInput style={style.inputForm}
                            placeholder="Ex.: contato@meucontato.com.br"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType={"go"}
                        />

                        <Text style={style.labelText}>{'Senha: '}<Text style={style.labelTextJr}>{' Senhas longas são mais fortes.'}</Text></Text>
                        <TextInput style={style.inputForm}
                            placeholder="************"
                            secureTextEntry={true}
                            password={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType={"go"}
                        />

                        <Text style={style.labelText}>{'Código de Ativação: '}<Text style={style.labelTextJr}>{' Código do seu condomínio'}</Text></Text>
                        <TextInput style={style.inputForm}
                            placeholder="Ex.: ALFA123"
                            returnKeyType={"go"}
                        />

                        <View style={style.button}>
                            <TouchableOpacity onPress={this.LoginButtonPress.bind(this)}>
                                <Text style={style.buttonText}>CADASTRAR</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={style.link}>
                            <TouchableOpacity onPress={this.LoginButtonPress.bind(this)}>
                                <Text style={style.linkNewUser}>Já tem uma conta? <Text style={style.linkNewUserUnderLine}>Entrar</Text></Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>


            </KeyboardAwareScrollView>
        );
    }
}