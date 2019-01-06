import React from 'react';
import { Button, View } from 'react-native';
import { BACKGROUD_TEXT_COLOR } from '../../styles/common';

const BottomButton = ({ buttonText, onPress }) => {
    const styles = {
        buttonContainer: {
            marginTop: 34
        }
    };
    return (
        <View style={styles.buttonContainer}>
            <Button color={BACKGROUD_TEXT_COLOR} title={buttonText} onPress={onPress}></Button>
        </View>
    );
};

BottomButton.defaultProps = { navigateEndpoint: 'MainMenu' };

export default BottomButton;