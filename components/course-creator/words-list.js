import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';
import CustomInput from '../shared/custom-input';
import firebase from 'firebase';


export default class WordsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { newWord: null };
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
    }

    render() {
        return <View style={styles.menuContainer}>
            <View style={styles.contentBackground}>
                <ContentHeader text='List of added words'/>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    menuContainer: {
        padding: 30,
        paddingTop: 60,
        backgroundColor: BACKGROUD_COLOR,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'stretch'
    },
    contentBackground: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 11,
        alignItems: 'center',
        padding: 23
    }
});