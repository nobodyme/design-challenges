/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CustomHeader from './components/CustomHeader';
import RecentlyPlayed from './components/RecentlyPlayed';
import FavoriteArtist from './components/FavoriteArtist';
import NavBar from './components/NavBar';
import CurrentSong from './components/CurrentSong';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView contentContainerStyle={styles.mainContainer} contentInsetAdjustmentBehavior="automatic">
        <View style={{ flex: 1, justifyContent: 'flex-start'}}>
          <CustomHeader/>
          <RecentlyPlayed/>
          <FavoriteArtist/>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end'}}>
          <CurrentSong/>
          <NavBar/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#202344',
    color: 'white'
  }
});

export default App;
