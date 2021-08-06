import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RecentlyPlayedListItems from './RecentlyPlayedListItems';

const songs = [
  {
    "id": 1,
    "name": "Sunset",
    "artist": "Midnight"
  },
  {
    "id": 2,
    "name": "Stargazing",
    "artist": "Kygo"
  },
  {
    "id": 3,
    "name": "Lean On",
    "artist": "Major Lazer"
  },
  {
    "id": 4,
    "name": "Here I am Again",
    "artist": "Yerin Beak"
  },
  {
    "id": 5,
    "name": "Is You",
    "artist": "AILEE"
  }
]

const RecentlyPlayed = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Recently played</Text>
        <Text>SEE ALL</Text>
      </View>
      <View style={styles.itemContainer}>
        {songs.map((song) =>
          <RecentlyPlayedListItems song={song} key={song.id}/>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default RecentlyPlayed;