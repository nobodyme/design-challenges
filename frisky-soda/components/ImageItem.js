import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground} from 'react-native';

export default function ImageItem(props) {
  return (
    <ImageBackground style={styles.imageBackground} imageStyle={styles.image} source={props.item.imageSource}>
      <View style={styles.imageContent}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../assets/icons/favorite-fill.svg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Trip to Tokyo</Text>
          <Text style={styles.text}>{props.item.date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  imageBackground: {
    height: 520,
    width: 280,
  },
  image: {
    borderRadius: 20
  },
  imageContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    height: 24,
    width: 24,
  },
  textContainer: {
    marginBottom: 10
  },
  header: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    paddingVertical: 10
  },
  text: {
    color: 'white'
  }
});