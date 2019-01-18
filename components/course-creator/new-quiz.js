import React from 'react';
import { StyleSheet, View, ScrollView, TextInput, Button } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import BottomButton from '../shared/bottom-button';
import CustomInput from '../shared/custom-input';
import firebase from 'firebase';
import { ListItem, CheckBox, Divider } from 'react-native-elements'


export default class NewQuiz extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.wordId = navigation.getParam('selectedWordId');
        this.state = { question: null, answers: [], answer: null, checked: false };
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
    }

    addQuizQuestion() {
        const { question, answers } = this.state;
        const questionObject = { question, answers };
        const newDocument = this.firestore.collection(`courses/default/words/${this.wordId}/quizes`).doc();
        newDocument.set(questionObject)
            .catch((err) => console.error(err.message));
        this.props.navigation.navigate('WordsList');
    }

    addAnswer() {
        const { answer, checked } = this.state;
        const answers = this.state.answers.slice();

        answers.push({ answer: answer, isTrue: checked });
        this.setState({ answers: answers, answer: null, checked: false });
    }

    removeAnswer(index) {
        const newArray = this.state.answers.splice(index - 1, 1);
        this.setState({ answers: newArray });
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
                <ContentText text='Answer:' additionalStyle={{ paddingBottom: 10 }} />
                <View style={styles.answerBlock}>
                    <CustomInput additionalStyle={styles.wordInput} placeholder='Answer' value={this.state.answer} onChangeText={answer => this.setState({ answer })} />
                    <CheckBox
                        title='Is true'
                        containerStyle={{ backgroundColor: PRIMARY_COLOR }}
                        textStyle={{ color: BACKGROUD_COLOR }}
                        size={12}
                        checked={this.state.checked}
                        onPress={() => this.setState({ checked: !this.state.checked })}
                    />
                </View>
                <Button color={BACKGROUD_COLOR} title='Add answer' onPress={() => this.addAnswer()}></Button>
                <Divider style={{ backgroundColor: BACKGROUD_COLOR, height: 1, alignSelf: 'stretch', marginBottom: 5 }} />
                <ScrollView style={styles.scrollView}>
                    {
                        answers ? answers.map((answerObject, i) => (
                            <ListItem
                                style={{ alignSelf: 'stretch' }}
                                key={i}
                                title={answerObject.answer}
                                rightIcon={{ name: 'delete', onPress: () => this.removeAnswer(i) }}
                            />
                        )) : null
                    }
                </ScrollView>
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
    },
    wordInput: {
        flex: 1,
        backgroundColor: BACKGROUD_COLOR
    },
    answerBlock: {
        flexDirection: 'row',
        marginBottom: 5
    },
    scrollView: {
        alignSelf: 'stretch'
    },
});