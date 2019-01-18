import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR, SECONDARY_COLOR } from '../../styles/common';

const WordBlock = ({ word }) => {
    const styles = {
        wordWrap: {
            backgroundColor: SECONDARY_COLOR,
            flex: 1,
            margin: 7,
            borderRadius: 11,
            justifyContent: 'center',
            paddingLeft: 25,
            paddingRight: 25
        },
        word: {
            color: BACKGROUD_COLOR,
            fontSize: 15
        }
    };

    return (
        <View style={styles.wordWrap}>
            <Text style={styles.word}>{`${word.originalWord} - ${word.translation}`}</Text>
        </View>
    );
};

WordBlock.defaultProps = { word: {} };

export default WordBlock;