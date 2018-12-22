import React from 'react';
import { Text, View } from 'react-native';

const ViewHeader = ({ text }) => {
    const styles = {
        view: {
            alignItems: 'center',
            paddingTop: 15
        },
        text: {
            color: '#47525E',
            fontSize: 28,
            fontWeight: '300'
        }
    };

    return <View style={styles.view}><Text style={styles.text}>{text}</Text></View>;
};

ViewHeader.defaultProps = { text: '' };

export default ViewHeader;