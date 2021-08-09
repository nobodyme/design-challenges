import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';
import ArtistListItem from './ArtistListItem';
import AppText from './AppText';

const artists = [
  {
    "id": 1,
    "name": "Taylor Swift",
    "totalPlayMinutes": "21313",
    "likedSongCount": "97",
    "image": require("../assets/images/taylor.jpeg")
  },
  {
    "id": 2,
    "name": "Kygo",
    "totalPlayMinutes": "12688",
    "likedSongCount": "23",
    "image": require("../assets/images/kygo.jpeg")
  },
  {
    "id": 3,
    "name": "Phoebe Ryan",
    "totalPlayMinutes": "7677",
    "likedSongCount": "17",
    "image": require("../assets/images/phoebe-ryan.jpeg")
  }
]

const FavoriteArtist = () => {
  return (
    <View>
      <View style={styles.container}>
        <AppText size='large'>Your favorite artists</AppText>
        <AppText>SEE ALL</AppText>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {artists.map((artist) =>
          <ArtistListItem artist={artist} key={artist.id}/>
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

export default FavoriteArtist;