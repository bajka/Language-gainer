import React from 'react';
import { StyleSheet, View, Button, Text, TouchableWithoutFeedback } from 'react-native';
import firebase from 'firebase';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';

export default class QuizMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = { quizes: null, currentQuiz: null, currentQuizCursor: 0 };
        const { navigation } = this.props;
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
        this.getQuizQuestions(navigation.getParam('lessonWordsIds', []));
    }

    async getQuizQuestions(lessonWordsIds) {
        const quizList = [];
        for (wordId of lessonWordsIds) {
            const quizesSnapshot = await this.firestore.collection(`courses/default/words/${wordId}/quizes`).get()
            quizesSnapshot.forEach(quiz => quizList.push(quiz.data()));
        }
        this.setState({ quizes: quizList });
        this.selectQuestion();
    }

    selectQuestion(direction = 0) {
        let { currentQuizCursor } = this.state;
        currentQuizCursor += direction;
        this.setState({ currentQuizCursor: currentQuizCursor })
        if (this.state.quizes && this.state.quizes.length) {
            this.setState({ currentQuiz: this.state.quizes[currentQuizCursor] });
        }
    }

    render() {
        const { quizes } = this.state;
        const { currentQuiz } = this.state;
        const { currentQuizCursor } = this.state;
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <View style={styles.header}>
                    {currentQuizCursor > 0 ? <TouchableWithoutFeedback onPress={() => this.selectQuestion(-1)}><Text style={styles.quizNavigation}>Back</Text></TouchableWithoutFeedback> : null}
                    <ContentHeader style={styles.contentHeader} text={quizes ? `Question ${currentQuizCursor + 1}/${quizes.length}` : ''} />
                    {quizes && currentQuizCursor < quizes.length - 1 ?<TouchableWithoutFeedback onPress={() => this.selectQuestion(1)}><Text style={styles.quizNavigation}>Next</Text></TouchableWithoutFeedback> : null}
                </View>
                <ContentText text={currentQuiz && currentQuiz.question} />
                <View style={styles.answersContainer}>
                    {
                        currentQuiz ? currentQuiz.answers.map((elem, id) =>
                            <View style={styles.answerWrap} key={id}>
                                <Text style={styles.answer}>{`${elem.answer}`}</Text>
                            </View>)
                            : <View style={styles.loadingMessage}><Text>Loading...</Text></View>
                    }
                </View>
            </View>
            <View style={styles.quizButton}>
                <Button color={BACKGROUD_TEXT_COLOR} title="Confirm anwers" onPress={() => this.props.navigation.navigate('Quiz', { lessonWordsIds: this.lessonWordsIds })}></Button>
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
    answersContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    answerWrap: {
        backgroundColor: BACKGROUD_COLOR,
        height: 34,
        justifyContent: 'center',
        paddingLeft: 13,
        paddingRight: 13,
        marginTop: 13
    },
    answer: {
        color: BACKGROUD_TEXT_COLOR,
        fontSize: 15
    },
    loadingMessage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentHeader: {
        flex: 1,
        alignItems: 'center'
    },
    quizNavigation: {
        color: BACKGROUD_COLOR
    }
});