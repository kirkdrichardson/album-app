// import library to help create Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';
// create Component

// render it to device

const App = () => {
  return (
    <View>
      <Header headerText={'Alboooom'} />
      <AlbumList />
    </View>
  );
};


export default App;
