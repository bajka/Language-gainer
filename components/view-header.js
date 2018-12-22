import React from 'react';
import { Text, View } from 'react-native';
import { BACKGROUD_TEXT_COLOR } from '../styles/common';

const ViewHeader = ({ text }) => {
    const styles = {
        view: {
            alignItems: 'center',
            paddingTop: 15
        },
        text: {
            color: BACKGROUD_TEXT_COLOR,
            fontSize: 28,
            fontWeight: '300'
        }
    };

    return <View style={styles.view}><Text style={styles.text}>{text}</Text></View>;
};

ViewHeader.defaultProps = { text: '' };

export default ViewHeader;