import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ButtonHeader from './button-header'
import ViewHeader from './view-header';
import ViewDescription from './view-description';
import MenuButton from './menu-button';

export default class MainMenu extends React.Component {

    testFunc() {
        console.log('test');
    }

    render() {
        return <View style={styles.menuButton}>
            <ViewHeader text="Language gainer"></ViewHeader>
            <ViewDescription text="Welcome Mariusz, what do you want to do today?"></ViewDescription>
            <MenuButton></MenuButton>
            <Button color="#47525E" title="Sign out" onPress={this.testFunc}></Button>
        </View>
    }
}

const styles = StyleSheet.create({
    menuButton: {
        backgroundColor: '#F9F7F7',
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch'
    }
});