import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function ImageItem(props) {
  let imageSize
  if (props.size === 'large') {
    imageSize = {...styles.imageBackground, width: '100%'}
  } else {
    imageSize = {...styles.imageBackground}
  }
  return (
    <ImageBackground style={imageSize} imageStyle={styles.image} source={props.item.imageSource}>
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
  imageBackground: {
    width: 280,
    height: '100%'
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
    marginBottom: 10,
    marginLeft: 10
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