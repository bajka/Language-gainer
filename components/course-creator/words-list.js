import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { BACKGROUD_COLOR, PRIMARY_COLOR } from '../../styles/common';
import ContentText from '../shared/content-text';
import ContentHeader from '../shared/content-header';
import BottomButton from '../shared/bottom-button';
import Images from '../../assets/images';
import firebase from 'firebase';
import ListBlock from '../shared/list-block';
import ButtonWithIcon from '../shared/button-with-icon';
import { SearchBar } from 'react-native-elements'


export default class WordsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { wordsList: null, selected: [] };
        this.allWords = [];
        this.firestore = firebase.firestore();
        this.firestore.settings({ timestampsInSnapshots: true });
        this.getWordsList();
    }

    async getWordsList() {
        const wordsList = [];
        const snapshot = await this.firestore.collection('courses/default/words').get();
        snapshot.forEach(wordSnapshot => wordsList.push({ id: wordSnapshot.id, ...wordSnapshot.data() }));
        this.setState({ wordsList: wordsList });
        this.allWords = wordsList;
    }

    refreshState() {
        const selected = this.state.wordsList.filter(word => word.selected);
        this.setState({
            wordsList: this.state.wordsList,
            selected: selected
        });
    }

    filterWords(searchText) {
        const wordsList = this.allWords.slice();
        const filteredList = wordsList.filter(wordObject => wordObject.originalWord.includes(searchText));
        this.setState({ wordsList: filteredList });
    }

    deleteSelectedWords() {
        const { wordsList } = this.state;
        const listAfterDeletion = wordsList.filter(wordObject => !wordObject.selected);
        const promiseArray = wordsList
            .filter(wordObject => wordObject.selected)
            .map(({ id }) => this.firestore.collection('courses/default/words').doc(id).delete());

        Promise.all(promiseArray)
            .catch(
                (err) => this.setState({ wordsList: wordsList })
            );

        this.setState({ wordsList: listAfterDeletion, selected: [] });
    }

    render() {
        const { wordsList } = this.state;
        const { selected } = this.state;
        return <View style={styles.menuContainer}>
            <View style={styles.buttonBar}>
                <ButtonWithIcon show={selected.length == 1} text='Add quiz' iconPath={Images.addIcon} onPress={() => this.props.navigation.navigate('NewQuiz')} />
                <ButtonWithIcon show={selected.length >= 1} text='Delete' iconPath={Images.deleteIcon} onPress={() => this.deleteSelectedWords()} />
            </View>
            <View style={styles.contentBackground}>
                <ContentHeader text='List of added words' />
                <SearchBar
                    containerStyle={styles.searchBar}
                    platform='ios'
                    onChangeText={(searchText) => this.filterWords(searchText)}
                    placeholder='Type Here...' />
                <ScrollView style={styles.scrollView}>
                    {
                        wordsList ?
                            wordsList.map((word, index) => <ListBlock blockText={word.originalWord} key={index}
                                onClick={() => { word.selected = !word.selected; this.refreshState(); }}
                                selected={word.selected} />) : null
                    }
                </ScrollView>
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
    },
    scrollView: {
        alignSelf: 'stretch'
    },
    searchBar: {
        alignSelf: 'stretch',
        backgroundColor: PRIMARY_COLOR
    }
});