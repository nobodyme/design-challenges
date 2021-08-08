import React from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import AppText from './AppText';

const ArtistListItem = ({artist}) => {
  return (
    <View style={styles.container}>
      <Image source={artist.image} style={styles.imageItem}/>
      <View>
        <AppText>{artist.name}</AppText>
        <AppText>{artist.totalPlayMinutes}</AppText>
        <AppText>{artist.likedSongCount}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  imageItem: {
    width: 80,
    height: 80
  },
})

export default ArtistListItem;