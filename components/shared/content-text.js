import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR } from '../../styles/common';

const ContentText = ({ text }) => {
    const styles = {
        text: {
            color: BACKGROUD_COLOR,
            fontSize: 13,
            fontWeight: '400',
            textAlign: 'center'
        }
    };

    return <View>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>;
};

ContentText.defaultProps = { text: '' };

export default ContentText;