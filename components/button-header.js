import React from 'react';
import {Text} from 'react-native';

const ButtonHeader = ({text}) => {
    const styles = { backgroundColor: 'blue', color: 'white' };

    return <Text style={styles}>{`Test ${text}`}</Text>;
};

ButtonHeader.defaultProps = {text: ''};

export default ButtonHeader;