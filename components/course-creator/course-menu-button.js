import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { CONTRAST_COLOR } from '../../styles/common';
import RoundedImage from '../shared/rounded-image';
import ContentText from '../shared/content-text';

export default class CourseMenuButton extends React.Component {

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
                <View style={styles.descriptionPart}>
                    <View style={styles.textWrapper}>
                        <ContentText text={this.props.text} />
                    </View>
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
        backgroundColor: CONTRAST_COLOR,
        justifyContent: 'center'
    },
    image: {
        width: 125,
        height: 83,
        borderRadius: 13,
        marginRight: -8
    },
    descriptionPart: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textWrapper: {
        width: 140
    }
});