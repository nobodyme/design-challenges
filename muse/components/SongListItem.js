import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground
} from 'react-native';
import AppText from './AppText';

const SongListItem = ({song}) => {
  return (
    <ImageBackground source={song.image} style={styles.imageItem}>
      <View style={styles.songItem}>
        <AppText>{song.name}</AppText>
        <AppText>{song.artist}</AppText>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageItem: {
    width: 80,
    height: 80
  },
  songItem: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})

export default SongListItem;