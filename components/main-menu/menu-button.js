import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import ButtonHeader from './button-header';
import ButtonText from './button-text';
import { PRIMARY_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';

export default class MenuButton extends React.Component {

    constructor(props) {
        super(props);
        this.disabled = {};
        if (props.disabled) {
            this.disabled = {opacity: 0.5};
        }
    }

    render() {
        return <TouchableWithoutFeedback onPress={this.props.click}>
            <View style={styles.mainContainer} {...this.disabled}>
                <ButtonHeader text={this.props.headerText}></ButtonHeader>
                <View style={styles.descriptionPart}>
                    <ButtonText text={this.props.description}></ButtonText>
                    <RoundedImage image={this.props.image} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginLeft: 36,
        marginRight: 36,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: PRIMARY_COLOR
    },
    image: {
        width: 137,
        height: 91,
        borderRadius: 13,
        marginRight: -8
    },
    descriptionPart: {
        flexDirection: 'row'
    }
});