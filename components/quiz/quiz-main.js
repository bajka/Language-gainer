import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import firebase from 'firebase';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import AnswerBlock from './answer-block';
import ButtonNavigation from '../shared/button-navigation';
import BottomButton from '../shared/bottom-button';

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
                    <ButtonNavigation onPress={() => this.selectQuestion(-1)} text='Back' showButton={currentQuizCursor > 0} />
                    <ContentHeader style={styles.contentHeader} text={quizes ? `Question ${currentQuizCursor + 1}/${quizes.length}` : ''} />
                    <ButtonNavigation onPress={() => this.selectQuestion(1)} text='Next' showButton={quizes && currentQuizCursor < quizes.length - 1} />
                </View>
                <ContentText text={currentQuiz && currentQuiz.question} />
                <View style={styles.answersContainer}>
                    {
                        currentQuiz ?
                            currentQuiz.answers.map((elem, index) => <AnswerBlock answer={elem.answer} key={index} />)
                            : <View style={styles.loadingMessage}><Text>Loading...</Text></View>
                    }
                </View>
            </View>
            <BottomButton buttonText="Confirm anwers" navigateEndpoint='Quiz' navigateData={{ lessonWordsIds: this.lessonWordsIds }}/>
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
    answersContainer: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'center'
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
    }
});