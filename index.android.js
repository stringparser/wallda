/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import * as ReactNative from 'react-native';

let Text = ReactNative.Text;
let View = ReactNative.View;
let Image = ReactNative.Image;
let StyleSheet = ReactNative.StyleSheet;
let AppRegistry = ReactNative.AppRegistry;

class wallda extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'http://generator-meme.com/memes/successful-mexican_55a04b777e3626818.jpg'}}
       style={{width: 400, height: 400}} />
       <Text style={styles.welcome}>
         I don't get it! :D
       </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    color: '#000',
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('wallda', () => wallda);
