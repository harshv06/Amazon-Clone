import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator, { BottomTabs } from './Navigation/StackNavigator';
import { Provider } from 'react-redux';
import Store from './Store';
import { ModalPortal } from 'react-native-modals';
export default function App() {
  const [loggedIn,setLoggedIn]=useState(true)
  return (
      <Provider store={Store}>
        <StackNavigator/>
        <ModalPortal/>
      </Provider>
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
