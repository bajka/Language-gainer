import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ButtonHeader from './button-header';
import ButtonText from './button-text';
import { PRIMARY_COLOR } from '../styles/common';

export default class MenuButton extends React.Component {
    render() {
        return <View style={styles.mainContainer}>
            <ButtonHeader text={this.props.headerText}></ButtonHeader>
            <View style={styles.descriptionPart}>
                <ButtonText text={this.props.description}></ButtonText>
                <Image style={styles.image} source={this.props.image}></Image>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginLeft: 36,
        marginRight: 36,
        marginBottom: 15,
        borderRadius:10,
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