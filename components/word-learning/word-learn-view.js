import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase from 'firebase';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';
import Images from '../../assets/images';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';
import WordBlock from './word-block';


export default class WordLearnView extends React.Component {

    constructor(props) {
        super(props);
        this.state = { words: null };
        this.lessonWordsIds = [];
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
        this.getNewWords();
    }

    async getNewWords() {
        const completedWords = await this.getCurrentWordProgress();
        this.addWordsToViewVariable(completedWords);
        this.changeAmountOfCompletedWords(completedWords);
    }

    async getCurrentWordProgress() {
        const currentUser = firebase.auth().currentUser;
        const progress = await this.firestore.doc(`progresses/${currentUser.uid}`).get();
        return progress.data().completedWordCount;
    }

    addWordsToViewVariable(completedWords) {
        this.firestore.collection('courses/default/words').orderBy('originalWord').limit(completedWords + 3).get()
            .then(querySnapshot => {
                const splice = querySnapshot.docs.slice(querySnapshot.docs.length - 3);
                const wordList = [];
                splice.forEach(doc => {
                    this.lessonWordsIds.push(doc.id);
                    wordList.push(doc.data());
                });
                this.setState({ words: wordList });
            });
    }

    changeAmountOfCompletedWords(currentCompletedWords) {
        const currentUser = firebase.auth().currentUser;
        this.firestore.collection(`progresses`).doc(`${currentUser.uid}`).set({
            completedWordCount: currentCompletedWords + 3
        }, {merge: true});
    }

    render() {
        const { words } = this.state;
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <RoundedImage image={Images.books} additionalStyles={styles.imageStyles} />
                <ContentHeader text='Time to learn!' />
                <ContentText text='Try to remember these words and then move to small quiz to check your knowledge.' />
                <View style={styles.wordsContainer}>
                    {
                        words ?
                            words.map((word, index) => <WordBlock word={word} key={index} />)
                            : <View style={styles.loadingMessage}><Text>Loading...</Text></View>
                    }
                </View>
            </View>
            <BottomButton buttonText='Start quiz!' onPress={() => this.props.navigation.navigate('Quiz', { lessonWordsIds: this.lessonWordsIds })} />
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