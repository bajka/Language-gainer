import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import BottomButton from '../shared/bottom-button';
import firebase from 'firebase';
import { ListItem } from 'react-native-elements'


export default class NewQuiz extends React.Component {

    constructor(props) {
        super(props);
        this.state = { question: null, answers: [] };
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
    }

    addQuizQuestion() {

    }

    addAnswer() {
        const answers = this.state.answers.slice();
        answers.push({ answer: 'Bye' + answers.length, isTrue: true });
        this.setState({ answers: answers });
    }

    render() {
        const { answers } = this.state;
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <ContentText text='Write question and then add as much answer as you want' />
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    value={this.state.question}
                    onChangeText={question => this.setState({ question })}
                    placeholder='Question'
                    style={styles.questionArea}>
                </TextInput>
                <Button color={BACKGROUD_COLOR} title='Add answer' onPress={() => this.addAnswer()}></Button>
                {
                    answers ? answers.map((answerObject, i) => (
                        <ListItem
                            style={{ alignSelf: 'stretch' }}
                            key={i}
                            title={answerObject.answer}
                            rightIcon={{ name: 'remove' }}
                        />
                    )) : null
                }
            </View>
            <BottomButton buttonText='Save' onPress={() => this.addQuizQuestion()}></BottomButton>
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
    questionArea: {
        backgroundColor: 'white',
        alignSelf: 'stretch',
        height: 80,
        padding: 10,
        marginBottom: 20,
        marginTop: 20
    }
});