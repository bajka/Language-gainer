import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';
import CustomInput from '../shared/custom-input';
import firebase from 'firebase';


export default class NewWord extends React.Component {

    constructor(props) {
        super(props);
        this.state = { newWord: null };
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
    }

    saveWord() {
        const { newWord } = this.state;
        const splittedWord = newWord.split('-');
        const newDocument = this.firestore.collection('courses/default/words').doc();

        newDocument.set({
            originalWord: splittedWord[0],
            translation: splittedWord[1]
        }).then(
            (success) => {
                this.setState({ newWord: '' });
            },
            (error) => { 
                console.error(error.message);
             }
        );
    }

    render() {
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <ContentHeader text='Create course' />
                <ContentText text='Add word in format: Spain_word, translation first native word then add "-" and then write a translation for this word.' />
                <CustomInput additionalStyle={styles.wordInput} placeholder='OriginalWord-Translation' value={this.state.newWord} onChangeText={newWord => this.setState({ newWord })} />
                <BottomButton buttonText='Add' onPress={() => this.saveWord()}></BottomButton>
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
    wordInput: {
        alignSelf: 'stretch',
        backgroundColor: BACKGROUD_COLOR,
        marginTop: 40
    }
});