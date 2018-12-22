import React from 'react';
import { Text, View } from 'react-native';

const ViewDescription = ({ text }) => {
    const styles = {
        view: {
            alignItems: 'center',
            paddingTop: 15,
            paddingLeft: 70,
            paddingRight: 70
        },
        text: {
            color: '#47525E',
            fontSize: 14,
            fontWeight: '700',
            textAlign: 'center'
        }
    };

    return <View style={styles.view}><Text style={styles.text}>{text}</Text></View>;
};

ViewDescription.defaultProps = { text: '' };

export default ViewDescription;