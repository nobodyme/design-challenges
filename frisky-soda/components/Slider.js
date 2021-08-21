import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Button } from 'react-native';

export default function Slider(props) {
  return (
    <View>
      <Button title="blah" onPress={() => props.navigation.navigate('Details')}/>
      <ImageBackground style={styles.imgBackground} imageStyle={styles.img} source={require('../assets/tokyo-bg.jpeg')}>
        <View style={styles.imageContent}>
          <View style={styles.favorite}>
            <Image style={styles.icon} source={require('../assets/icons/favorite-fill.svg')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.header}>Trip to Tokyo</Text>
            <Text style={styles.text}>March 21, 2019</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgBackground: {
    height: 520,
    width: 280,
    padding: 20
  },
  img: {
    borderRadius: 20
  },
  imageContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  favorite: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    height: 24,
    width: 24,
  },
  header: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  text: {
    color: 'white'
  },
  textContainer: {
    marginBottom: 10
  }
});
