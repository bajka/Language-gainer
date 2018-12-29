import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import ViewHeader from './view-header';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../styles/common';
import firebase from 'firebase';
import ErrorText from './error-text';
import ViewDescription from './view-description';
import CustomInput from './custom-input';

export default class LoginPage extends React.Component {

    state = { email: '', password: '', error: '' };

    signin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Home');
                this.setState({ error: '' });
            })
            .catch((error) => this.setState({ error: error.message }));        
    }

    render() {
        return <View style={styles.loginContainer}>
            <View>
                <ViewHeader style={styles.title} text='Sign in' />
                <ErrorText errorText={this.state.error}/>
                <View style={styles.controlPadding}>
                    <CustomInput placeholder='Email' value={this.state.email} onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.controlPadding}>
                    <CustomInput secureTextEntry={true} placeholder='Password' password={this.state.password} onChangeText={password => this.setState({ password })} />
                </View>
                <View style={styles.controlPadding}>
                    <Button title='Sign in' onPress={this.signin} color={BACKGROUD_TEXT_COLOR} />
                </View>
                <ViewDescription text='Forgot password' onPress={() => this.props.navigation.navigate('NewPassword')}/>
                <ViewDescription text='Create account' onPress={() => this.props.navigation.navigate('NewAccount')}/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    controlPadding: {
        paddingLeft: 43,
        paddingRight: 43,
        paddingBottom: 20
    },
    loginContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: BACKGROUD_COLOR
    }
})