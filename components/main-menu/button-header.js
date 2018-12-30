import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR } from '../../styles/common';

const ButtonHeader = ({ text }) => {
    const styles = {
        textContainer: {
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8
        },
        text: {
            color: BACKGROUD_COLOR,
            fontSize: 17,
            fontWeight: '400'
        }
    };

    return <View style={styles.textContainer}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>;
};

ButtonHeader.defaultProps = { text: '' };

export default ButtonHeader;