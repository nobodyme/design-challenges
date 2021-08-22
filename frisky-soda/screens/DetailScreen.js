import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, StatusBar } from 'react-native';

import ImageItem from '../components/ImageItem';
import FlatButton from '../shared/FlatButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const imageHeight = screenHeight * 0.7;

export default function DetailScreen({route}) {
  return (
      <View style={styles.imageContainer}>
        <View style={{ height: imageHeight, width: screenWidth, paddingHorizontal: 10, paddingBottom: 10 }}>
          <ImageItem item={route.params} size='large'/>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textContentContainer}>
            <View style={styles.textHeaderContainer}>
              <Text style={styles.header}>Journal</Text>
              <Text style={styles.headerInfo}>
                Swipe up to Read
              </Text>
            </View>
            <View>
              <Text
                ellipsizeMode='tail'
                numberOfLines={3}
                style={styles.text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
              </Text>
            </View>
          </View>
          <View>
            <FlatButton text="Edit Journal" onPress={() => console.log('working')}/>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
    paddingTop: 10
  },
  textContainer: {
    width: '100%',
    height: screenHeight - imageHeight,
    padding: 10,
    flex: 1,
    justifyContent: 'space-between'
  },
  textContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  textHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16
  },
  headerInfo: {
    fontSize: 10,
    color: '#818899'
  },
  headerInfoIcon: {
    height: 24,
    width: 24
  },
  text: {
    color: '#818899',
    fontSize: 16
  }
})