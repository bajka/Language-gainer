import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { BACKGROUD_TEXT_COLOR } from '../../styles/common';

const ViewDescription = ({ text, onPress }) => {
    const styles = {
        view: {
            alignItems: 'center',
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 70,
            paddingRight: 70
        },
        text: {
            color: BACKGROUD_TEXT_COLOR,
            fontSize: 14,
            fontWeight: '700',
            textAlign: 'center'
        }
    };

    return <TouchableWithoutFeedback  onPress={onPress}><View style={styles.view}><Text style={styles.text}>{text}</Text></View></TouchableWithoutFeedback>;
};

ViewDescription.defaultProps = { text: '' };

export default ViewDescription;