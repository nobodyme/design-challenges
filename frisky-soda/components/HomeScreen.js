import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import Slider from './Slider';

export default function HomeScreen(props) {
  return ( 
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.bar}>
          <Image style={styles.logo} source={require('../assets/profile.png')} />
          <Image style={styles.icon} source={require('../assets/icons/setting-alt-fill.svg')} />
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your</Text>
        <Text style={styles.header}>Journals</Text>
      </View>
      <Slider {...props}/>
      <View style={styles.toolBox}>
        <Image style={styles.toolBoxIcon} source={require('../assets/icons/archive-load-fill.svg')} />
        <Image style={styles.toolBoxIconActive} source={require('../assets/icons/add-round-fill.svg')} />
        <Image style={styles.toolBoxIcon} source={require('../assets/icons/img-box-fill.svg')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    padding: 2,
  },
  topBar: {
    height: 10,
  },
  headerContainer: {
    paddingVertical: 30
  },
  header: {
    fontSize: 38,
    fontWeight: "bold"
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 10,
    alignItems: 'center'
  },
  logo: {
    height: 42,
    width: 42,
    borderRadius: 10
  },
  icon: {
    height: 24,
    width: 24,
  },
  toolBoxIcon: {
    height: 24,
    width: 24,
  },
  toolBoxIconActive: {
    height: 64,
    width: 64,
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
    elevation: 5
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
