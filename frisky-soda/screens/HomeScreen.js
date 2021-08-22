import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Dimensions, StatusBar } from 'react-native';

import Slider from '../components/Slider';

import Settings from '../assets/svg/Settings';
import ImageBox from '../assets/svg/ImageBox';
import Archive from '../assets/svg/Archive';
import Add from '../assets/svg/Add';

const screenHeight = Dimensions.get('window').height;

const headerHeight = screenHeight * 0.2;
const navHeight = screenHeight * 0.1;
const sliderHeight = screenHeight - headerHeight - navHeight;

export default function HomeScreen(props) {
  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.topBar}>
            <Image style={styles.logo} source={require('../assets/profile.png')} />
            <Settings />
          </View>
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>Your</Text>
            <Text style={styles.header}>Journals</Text>
          </View>
        </View>
        <View style={styles.sliderContainer}>
          <Slider {...props}/>
        </View>
        <View style={styles.toolBox}>
          <Archive/>
          <Add/>
          <ImageBox/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    paddingTop: 20,
    marginTop: StatusBar.currentHeight,
    justifyContent: 'space-between'
  },
  headerContainer: {
    height: headerHeight,
    paddingBottom: 5
  },
  logo: {
    height: 42,
    width: 42,
    borderRadius: 10
  },
  topBar: {
    paddingTop: 5,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  header: {
    fontSize: 38,
    fontWeight: "bold"
  },
  icon: {
    height: 24,
    width: 24,
  },
  sliderContainer: {
    paddingVertical: 20,
    height: sliderHeight
  },
  toolBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: navHeight
  },
  toolBoxIcon: {
    height: 24,
    width: 24,
  },
  toolBoxIconActive: {
    height: 64,
    width: 64,
  }
});
