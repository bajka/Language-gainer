import React from 'react';
import { Text, TouchableWithoutFeedback, Image, View } from 'react-native';
import { BACKGROUD_TEXT_COLOR } from '../../styles/common';

const ButtonWithIcon = ({ text, onPress, show, iconPath }) => {
    const styles = {
        buttonWraper: {
            flexDirection: 'row',
            paddingLeft: 20
        },
        text: {
            color: BACKGROUD_TEXT_COLOR
        },
        image: {
            marginLeft: 7,
            width: 18,
            height: 18
        }
    };
    if (show) {
        return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.buttonWraper}>
                    <Text style={styles.text}>{text}</Text>
                    {
                        iconPath ? <Image style={styles.image} source={iconPath}></Image> : null
                    }
                </View>
            </TouchableWithoutFeedback>
        );
    }
    return null
};

ButtonWithIcon.defaultProps = { text: '' };

export default ButtonWithIcon;