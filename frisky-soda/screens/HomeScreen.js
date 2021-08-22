import * as React from 'react';
import { Text, View, StyleSheet, Image, Button, Dimensions, StatusBar } from 'react-native';

import Slider from '../components/Slider';

import Settings from '../assets/svg/Settings';
import ImageBox from '../assets/svg/ImageBox';
import Archive from '../assets/svg/Archive';
import Add from '../assets/svg/Add';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const headerHeight = screenHeight * 0.2;
const toolHeight = screenHeight * 0.15;
const sliderHeight = screenHeight - headerHeight - toolHeight;
const toolWidth = screenWidth * 0.8;

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
        <View style={styles.toolContainer}>
          <View style={styles.tools}>
            <Archive/>
            <Add/>
            <ImageBox/>
          </View>
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
    fontWeight: "bold",
    // lineHeight: 40
  },
  icon: {
    height: 24,
    width: 24,
  },
  sliderContainer: {
    paddingVertical: 20,
    height: sliderHeight
  },
  toolContainer: {
    paddingVertical: 30,
    flex: 1,
    // height: toolHeight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tools: {
    width: toolWidth,
    // height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  toolBoxIcon: {
    height: 24,
    width: 24
  },
  toolBoxIconActive: {
    height: 64,
    width: 64,
  }
});
