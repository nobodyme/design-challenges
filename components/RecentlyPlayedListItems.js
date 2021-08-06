import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const RecentlyPlayedListItems = ({song}) => {
  return (
    <View>
      <Text>{song.name}</Text>
      <Text>{song.artist}</Text>
    </View>
  )
}

export default RecentlyPlayedListItems;