import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ViewHeader from './view-header';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../styles/common';
import firebase from 'firebase';

export default class LoginPage extends React.Component {

    state = { email: '', password: '' };

    signin = () => {
        console.log(this.state.email, this.state.password);

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { this.props.navigation.navigate('Home'); })
            .catch(() => { console.log('Failed') });        
    }

    render() {
        return <View style={styles.loginContainer}>
            <View>
                <ViewHeader style={styles.title} text='Sign in' />
                <View style={[styles.controlPadding, styles.titleGap]}>
                    <TextInput editable={true} style={styles.testInput} placeholder='Email' placeholderTextColor='#8190A5' value={this.state.email} onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.controlPadding}>
                    <TextInput editable={true} style={styles.testInput} secureTextEntry={true} placeholder='Password' placeholderTextColor='#8190A5' password={this.state.password} onChangeText={password => this.setState({ password })} />
                </View>
                <View style={styles.controlPadding}>
                    <Button title='Sign in' onPress={this.signin} color={BACKGROUD_TEXT_COLOR} />
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    testInput: {
        height: 50,
        borderColor: '#8492A6',
        borderWidth: 0.5,
        textAlign: 'center'
    },
    controlPadding: {
        paddingLeft: 43,
        paddingRight: 43,
        paddingBottom: 20
    },
    titleGap: {
        paddingTop: 80
    },
    loginContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: BACKGROUD_COLOR
    }
})