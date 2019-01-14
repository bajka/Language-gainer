import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';
import Images from '../../assets/images';
import firebase from 'firebase';
import ListBlock from '../shared/list-block';
import ButtonWithIcon from '../shared/button-with-icon';


export default class WordsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { wordsList: null, selected: [] };
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
        this.getWordsList();
    }

    async getWordsList() {
        const wordsList = [];
        const snapshot = await this.firestore.collection('courses/default/words').get();
        snapshot.forEach(wordSnapshot => wordsList.push(wordSnapshot.data()));
        this.setState({ wordsList: wordsList });
    }

    refreshState() {
        const selected = this.state.wordsList.filter(word => word.selected);
        this.setState({
            wordsList: this.state.wordsList,
            selected: selected
        });
    }

    render() {
        const { wordsList } = this.state;
        const { selected } = this.state;
        return <View style={styles.menuContainer}>
            <View style={styles.buttonBar}>
                <ButtonWithIcon show={selected.length == 1} text='Add quiz' iconPath={Images.addIcon} onPress={() => console.log('add')} />
                <ButtonWithIcon show={selected.length >= 1} text='Delete' iconPath={Images.deleteIcon} onPress={() => console.log('delete')} />
            </View>
            <View style={styles.contentBackground}>
                <ContentHeader text='List of added words' />
                {
                    wordsList ?
                        wordsList.map((word, index) => <ListBlock blockText={word.originalWord} key={index}
                            onClick={() => { word.selected = !word.selected; this.refreshState(); }}
                            selected={word.selected} />) : null
                }
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
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 25
    }
});