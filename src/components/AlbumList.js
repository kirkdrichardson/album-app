import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('component will mount maybe');
  }
render() {
  return (
    <View>
      <Text>Hellooooooo</Text>
    </View>
  );
}
}

export default AlbumList;
