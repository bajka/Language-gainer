import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './navigation/app-navigator';
import * as firebase from 'firebase';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

var config = {
  apiKey: "AIzaSyCnKTZ87WmGqliPb6gx8DboPOhaPuZdBHg",
  authDomain: "language-gainer.firebaseapp.com",
  databaseURL: "https://language-gainer.firebaseio.com",
  projectId: "language-gainer",
  storageBucket: "language-gainer.appspot.com",
  messagingSenderId: "748019215925"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
