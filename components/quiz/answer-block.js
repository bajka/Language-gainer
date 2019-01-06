import React from 'react';
import { Text, View, TouchableWithoutFeedback, Image } from 'react-native';
import { BACKGROUD_COLOR, BACKGROUD_TEXT_COLOR } from '../../styles/common';
import Images from '../../assets/images';

const AnswerBlock = ({ answer, onClick, selected }) => {
    const styles = {
        answerWrap: {
            backgroundColor: BACKGROUD_COLOR,
            height: 34,
            justifyContent: 'center',
            paddingLeft: 13,
            paddingRight: 13,
            marginTop: 13,
            flexDirection: 'row',
            alignItems: 'center'
        },
        answer: {
            color: BACKGROUD_TEXT_COLOR,
            fontSize: 15,
            flex: 1
        },
        image: {
            width: 23,
            height: 23
        }
    };

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.answerWrap}>
                <Text style={styles.answer}>{`${answer}`}</Text>
                {
                    selected ? <Image style={styles.image} source={Images.confirmIcon}></Image>:null
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

AnswerBlock.defaultProps = { answer: '' };

export default AnswerBlock;