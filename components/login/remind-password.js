import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import firebase from 'firebase';
import ViewHeader from '../shared/view-header';
import ErrorText from '../shared/error-text';
import CustomInput from '../shared/custom-input';
import ViewDescription from '../shared/view-description';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../../styles/common';

export default class RemindPassword extends React.Component {

    state = { email: '', error: '' };

    remindPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                this.props.navigation.navigate('Login');
                this.setState({ error: '' });
            })
            .catch((error) => this.setState({ error: error.message }));        
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
                    <Button title='Remind password' onPress={this.remindPassword} color={BACKGROUD_TEXT_COLOR} />
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