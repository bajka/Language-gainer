import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import firebase from 'firebase';
import ViewHeader from '../shared/view-header';
import ViewDescription from '../shared/view-description';
import MenuButton from './menu-button';
import { BACKGROUD_COLOR } from '../../styles/common';
import Images from '../../assets/images';


export default class MainMenu extends React.Component {

    createCourse = () => {
        console.log('createCourse');
    }
    signOut = () => {
        firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('Login');
        }, (error) => {
            console.error('Sign Out Error', error);
        });
    }

    render() {
        return <View style={styles.menuContainer}>
            <ViewHeader text="Language gainer"></ViewHeader>
            <ViewDescription text="Welcome Mariusz, what do you want to do today?"></ViewDescription>
            <MenuButton headerText='Practise words' description='Practise most  important words in chosen language' image={Images.languages} click={() => this.props.navigation.navigate('LearnWord')}></MenuButton>
            <MenuButton headerText='Deep dive into language' description='Listen podcast and read texts in chosen language' image={Images.diving} disabled={true}></MenuButton>
            <MenuButton headerText='Create own course' description='Share your knowledge with other people' image={Images.creating} click={() => this.props.navigation.navigate('CourseMenu')}></MenuButton>
            <View style={styles.signOutButton}>
                <Button color="#47525E" title="Sign out" onPress={this.signOut}></Button>
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