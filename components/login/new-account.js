import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';
import ViewHeader from '../shared/view-header';
import ErrorText from '../shared/error-text';
import CustomInput from '../shared/custom-input';
import ViewDescription from '../shared/view-description';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../../styles/common';

export default class NewAccount extends React.Component {

    state = { email: '', password_1: '', password_2: '', error: '' };

    createAccount = () => {
        if (!this.passwordsAreEqual()) {
            this.setState({error: 'Passwords are not equals'});
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password_1)
            .then(() => {
                this.props.navigation.navigate('Login');
                this.setState({ error: '' });
            })
            .catch((error) => this.setState({ error: error.message }));        
    }

    passwordsAreEqual() {
        return this.state.password_1 === this.state.password_2;
    }

    render() {
        return <View style={styles.loginContainer}>
            <View>
                <ViewHeader style={styles.title} text='Type your email' />
                <ErrorText errorText={this.state.error}/>
                <View style={styles.controlPadding}>
                    <CustomInput placeholder='Email' value={this.state.email} onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.controlPadding}>
                    <CustomInput secureTextEntry={true} placeholder='Password' password={this.state.password_1} onChangeText={password_1 => this.setState({ password_1 })} />
                </View>
                <View style={styles.controlPadding}>
                    <CustomInput secureTextEntry={true} placeholder='Type password again' password={this.state.password_2} onChangeText={password_2 => this.setState({ password_2 })} />
                </View>
                <View style={styles.controlPadding}>
                    <Button title='Create account' onPress={this.createAccount} color={BACKGROUD_TEXT_COLOR} />
                </View>
                <ViewDescription text='Back to login page' onPress={() => this.props.navigation.navigate('Login')}/>
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