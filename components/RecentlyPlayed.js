import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import SongListItem from './SongListItem';
import AppText from './AppText';

const songs = [
  {
    "id": 1,
    "name": "Sunset",
    "artist": "Midnight",
    "image": require("../assets/images/sunset.jpeg")
  },
  {
    "id": 2,
    "name": "Stargazing",
    "artist": "Kygo",
    "image": require("../assets/images/stargazing.jpeg")
  },
  {
    "id": 3,
    "name": "Lean On",
    "artist": "Major Lazer",
    "image": require("../assets/images/lean-on.jpeg")
  },
  {
    "id": 4,
    "name": "Here I am Again",
    "artist": "Yerin Beak",
    "image": require("../assets/images/here-i-am-again.jpeg")
  },
  {
    "id": 5,
    "name": "Is You",
    "artist": "AILEE",
    "image": require("../assets/images/is-you.png")
  }
]

const RecentlyPlayed = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppText size='large'>Recently played</AppText>
        <AppText>SEE ALL</AppText>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {songs.map((song) =>
          <SongListItem song={song} key={song.id}/>
        )}
      </ScrollView>
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