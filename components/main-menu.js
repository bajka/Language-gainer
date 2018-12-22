import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ButtonHeader from './button-header'
import ViewHeader from './view-header';
import ViewDescription from './view-description';
import MenuButton from './menu-button';
import { BACKGROUD_COLOR } from '../styles/common';

export default class MainMenu extends React.Component {

    testFunc() {
        console.log('test');
    }

    render() {
        return <View style={styles.menuContainer}>
            <ViewHeader text="Language gainer"></ViewHeader>
            <ViewDescription text="Welcome Mariusz, what do you want to do today?"></ViewDescription>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <MenuButton></MenuButton>
            <View style={styles.signOutButton}>
                <Button color="#47525E" title="Sign out" onPress={this.testFunc}></Button>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        backgroundColor: BACKGROUD_COLOR,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    signOutButton: {
        marginBottom: 31,
        paddingLeft: 38,
        paddingRight: 38
    }
});