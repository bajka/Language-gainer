import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR } from '../styles/common';

const ButtonText = ({ text }) => {
    const styles = {
        textContainer: {
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            flex: 1,
            justifyContent: 'flex-end'
        },
        text: {
            color: BACKGROUD_COLOR,
            fontSize: 13,
            fontWeight: '400'
        }
    };

    return <View style={styles.textContainer}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>;
};

ButtonText.defaultProps = { text: '' };

export default ButtonText;