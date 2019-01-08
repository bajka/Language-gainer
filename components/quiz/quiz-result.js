import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase from 'firebase';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';
import Images from '../../assets/images';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';


export default class QuizResult extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
    }

    render() {
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <RoundedImage image={Images.target} additionalStyles={styles.imageStyles} />
                <ContentHeader text='Well done!' />
                <ContentText text='You are much closer to achive your main goal which is beeing fluent in spanish.' />
                <View style={styles.wordsContainer}>
                    
                </View>
            </View>
            <BottomButton buttonText='Back to menu' onPress={() => this.props.navigation.navigate('Home')} />
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
    },
    quizButton: {
        marginTop: 34
    },
    imageStyles: {
        width: 204,
        height: 136,
        marginTop: -39
    },
    wordsContainer: {
        backgroundColor: BACKGROUD_COLOR,
        borderRadius: 11,
        flex: 1,
        alignSelf: 'stretch',
        marginTop: 22,
        flexDirection: 'column',
        padding: 7
    },
    loadingMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});