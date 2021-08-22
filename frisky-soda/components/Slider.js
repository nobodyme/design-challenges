import * as React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import ImageItem from './ImageItem';

export default function Slider(props) {
  return (
    <SafeAreaView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{flex: 1, flexDirection: 'row', height: '100%', width: '100%'}}>
            {imageList(props)}
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function imageList(props) {
  const imagesObject = [
    {
      id: 1,
      imageSource: require('../assets/tokyo-bg-card-back-1.png'),
      date: 'June 20, 2019'
    },
    {
      id: 2,
      imageSource: require('../assets/tokyo-bg.jpeg'),
      date: 'June 30, 2019',
      favorite: true
    },
    {
      id: 3,
      imageSource: require('../assets/tokyo-bg-card-back-2.png'),
      date: 'March 10, 2019'
    }
  ];

  return (
    imagesObject.map((image) => {
      return (
        <View key={image.id} style={{ paddingHorizontal: 10, height: '100%' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Details', {...image})}>
            <ImageItem item={image}/>
          </TouchableOpacity>
        </View>
      )
    })
  )
}