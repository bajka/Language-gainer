import React from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { BACKGROUD_COLOR } from '../../styles/common';

const ButtonNavigation = ({ text, onPress, showButton }) => {
    const styles = {
        text: {
            color: BACKGROUD_COLOR
        }
    };
    if (showButton) {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableWithoutFeedback>
        );
    }
    return null
};

ButtonNavigation.defaultProps = { text: '' };

export default ButtonNavigation;