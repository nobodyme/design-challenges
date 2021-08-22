import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

import Favorite from '../assets/svg/Favorite';
import Back from '../assets/svg/Back';

export default function ImageItem(props) {
  let imageSize;
  if (props.size === 'large') {
    imageSize = {...styles.imageBackground, width: '100%'}
  } else {
    imageSize = {...styles.imageBackground}
  }

  return (
    <ImageBackground style={imageSize} imageStyle={styles.image} source={props.item.imageSource}>
      <View style={styles.imageContent}>
        <View style={styles.iconContainer}>
          <View style={styles.backIconContainer}>
            {props.back ?
            <TouchableOpacity>
              <Back
                onPress={() => props.navigation.goBack()}
              />
            </TouchableOpacity>
            : null}
          </View>
          <View style={styles.favIconContainer}>
            {props.item.favorite ? <Favorite /> : null}
          </View>
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
    justifyContent: 'space-between',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between'
  },
  favIconContainer: {
    marginLeft: 'auto'
  },
  backIconContainer: {
    marginRight: 'auto'
  },
  icon: {
    height: 24,
    width: 24,
  },
  textContainer: {
    padding: 20
  },
  header: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    paddingVertical: 8
  },
  text: {
    color: 'white'
  }
});