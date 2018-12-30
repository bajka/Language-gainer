import React from 'react';
import { TextInput } from 'react-native';

const CustomInput = ({ editable, placeholder, onChangeText, ...rest }) => {
    const styles = {
        inputStyle: {
            height: 50,
            borderColor: '#8492A6',
            borderWidth: 0.5,
            textAlign: 'center'
        }
    };

    return <TextInput {...rest} editable={editable} style={styles.inputStyle} placeholder={placeholder} placeholderTextColor='#8190A5' onChangeText={onChangeText} />;
};

CustomInput.defaultProps = {
    editable: true,
    placeholder: '',
    onChangeText: () => { }
};

export default CustomInput;