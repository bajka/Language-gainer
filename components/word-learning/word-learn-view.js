import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import firebase from 'firebase';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR, PRIMARY_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';
import Images from '../../assets/images';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';


export default class WordLearnView extends React.Component {

    constructor(props) {
        super(props);
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
        firebase.auth().signInWithEmailAndPassword('bajka.mariusz@gmail.com', 'c34ac12321')
            .then(() => {
                this.getNewWords();
            })
            .catch((error) => this.setState({ error: error.message }));
    }

    moveToQuiz = () => {
        console.log('moveToQuiz');
    }

    getNewWords() {
        this.getProgress().then(completedWords => this.addWordsToViewVariable(completedWords));
    }

    getProgress() {
        const currentUser = firebase.auth().currentUser;
         return this.firestore.doc(`progresses/${currentUser.uid}`)
            .get()
            .then(progressData => {
                if (progressData && progressData.exists) {
                  return  progressData.data().completedWordCount;
                }
            }, error => { console.log(error) });
    }

    addWordsToViewVariable(completedWords) {
        this.firestore.collection('courses/default/words').orderBy('originalWord').limit(completedWords + 3).get().then(querySnapshot => {
            const splice = querySnapshot.docs.slice(querySnapshot.docs.length - 3);
            splice.forEach(doc => {
                console.log(doc.data());
            });
        });
    }

    render() {
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <RoundedImage image={Images.books} additionalStyles={styles.imageStyles} />
                <ContentHeader text='Time to learn!' />
                <ContentText text='Try to remember these words and then move to small quiz to check your knowledge.' />
                <View style={styles.wordsContainer}>

                </View>
            </View>
            <View style={styles.quizButton}>
                <Button color={BACKGROUD_TEXT_COLOR} title="Start quiz!" onPress={this.moveToQuiz}></Button>
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
        marginTop: 22
    }
});