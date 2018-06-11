
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <FontAwesome name="rocket" size={30} color="#e67e22" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ebee',
    borderWidth: 1,
    borderColor: '#ddd'
  }
});
