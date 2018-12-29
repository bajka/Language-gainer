import React from 'react';
import { Text, View } from 'react-native';
import { ERROR_COLOR } from '../styles/common';

const ErrorText = ({ errorText }) => {
    const styles = {
        textContainer: {
            alignSelf: 'center',
            paddingTop: 30,
            paddingBottom: 15
        },
        text: {
            color: ERROR_COLOR,
            fontSize: 13,
            fontWeight: '700',
            textAlign: 'center'
        }
    };

    return <View style={styles.textContainer}>
        <Text style={styles.text}>
            {errorText}
        </Text>
    </View>;
};

ErrorText.defaultProps = { errorText: '' };

export default ErrorText;