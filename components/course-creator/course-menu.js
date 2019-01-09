import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BACKGROUD_COLOR, CONTRAST_COLOR, PRIMARY_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';
import Images from '../../assets/images';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import CourseMenuButton from './course-menu-button';
import BottomButton from '../shared/bottom-button';


export default class CourseMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <ContentHeader text='Create course'/>
                <CourseMenuButton text='Add word/words' image={Images.word} click={() => this.navigation.navigate('AddWords')}/>
                <CourseMenuButton text='Preview words list' image={Images.words} click={() => this.navigation.navigate('WordList')}/>
                <CourseMenuButton text='Add podcast' image={Images.ytLink} disabled={true}/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        padding: 30,
        paddingTop: 60,
        backgroundColor: BACKGROUD_COLOR,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    contentBackground: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 11,
        alignItems: 'center',
        padding: 23
    }
});