/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeDemo extends Component {
  render() {
    return (
        <View style={{flex:1, justifyContent:'space-between'}}>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, backgroundColor:'turquoise'}}></View>
            <View style={{flex:1, backgroundColor:'yellowgreen'}}></View>
            <View style={{flex:1, backgroundColor:'thistle'}}></View>
          </View>
          <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1, backgroundColor:'slateblue'}}></View>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            </View>
            <View style={{flex:1, backgroundColor:'teal'}}></View>
          </View>
          <View style={{flex:1,backgroundColor:'firebrick', flexDirection:'row'}}>
            <View style={{flex:1, backgroundColor:'lightsteelblue'}}></View>
            <View style={{flex:1, backgroundColor:'orange'}}></View>
            <View style={{flex:1, backgroundColor:'lightyellow'}}></View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
