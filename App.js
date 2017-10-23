// import library to help create Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';
// create Component

// render it to device
console.log('he');
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


export default App;
