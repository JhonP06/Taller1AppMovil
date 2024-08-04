import React, { Component } from 'react'
import { Button, Image, ImageBackground, ImageComponent, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = () => {

    return (
        <View style={styles.continer}>
            <Text>LOGIN</Text>
            <View>
                <Image source={require('../component/login1.png')} style={styles.logo} />
            </View>
            <View style={styles.etiqueta}>
                <View style={styles.cajaPrincipal}>
                    <TextInput placeholder='correo@hotmail.com' style={{paddingHorizontal:15}}/>
                </View>
                <View style={styles.cajaPrincipal}>
                    <TextInput placeholder='contraseña' style={{paddingHorizontal:15}}/>
                </View>
                <View style={styles.botonP}>
                <TouchableOpacity style={styles.boton}>
                    <Text style={styles.botont}>Login</Text>
                </TouchableOpacity>
                </View>
            </View >
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eaf2f8',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'white'
    },
    etiqueta: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    cajaPrincipal:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    botonP:{
        alignItems:'center'
    },
    boton:{
        backgroundColor:'#525FE1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    botont:{
        textAlign:'center',
        color:'white'
    }
});
