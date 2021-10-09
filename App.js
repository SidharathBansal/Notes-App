import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyDy-1jveeagV7nQafMS5IpEKWeJ-SeWltM",
      authDomain: "rn-3007.firebaseapp.com",
      databaseURL: "https://rn-3007.firebaseio.com",
      projectId: "rn-3007",
      storageBucket: "rn-3007.appspot.com",
      messagingSenderId: "191715295062",
      appId: "1:191715295062:web:c157c5cfb77eed872820f7",
      measurementId: "G-LVEP42WQL2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
        {/* <LoginScreenComponent/> */}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* <NotesScreenComponent/> */}
        <LoginScreenComponent/>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
