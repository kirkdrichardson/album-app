import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => console.log(res));
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
