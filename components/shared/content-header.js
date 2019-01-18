import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_COLOR } from '../../styles/common';

const ContentHeader = ({ text, style }) => {
    const styles = {
        textContainer: {
            paddingTop: 8,
            paddingBottom: 8
        },
        text: {
            color: BACKGROUD_COLOR,
            fontSize: 28,
            fontWeight: '300'
        }
    };

    return <View style={[styles.textContainer, style]}>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>;
};

ContentHeader.defaultProps = { text: '' };

export default ContentHeader;