import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../../styles/common';

const AnswerBlock = ({ answer }) => {
    const styles = {
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
        }
    };

    return (
        <View style={styles.answerWrap}>
            <Text style={styles.answer}>{`${answer}`}</Text>
        </View>
    );
};

AnswerBlock.defaultProps = { answer: '' };

export default AnswerBlock;