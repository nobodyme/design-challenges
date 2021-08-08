import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import AppText from './AppText';

const NavBar = () => {
  return (
    <View style={styles.container}>
      <AppText>Home</AppText>
      <AppText>Search</AppText>
      <AppText>Library</AppText>
      <AppText>Favorites</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default NavBar;