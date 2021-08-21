import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import ImageItem from './ImageItem';

export default function DetailScreen({route}) {
  console.log('image', route.params);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{paddingVertical: 10}}>
        <ImageItem item={route.params} size='large'/>
      </View>
      <View>
        <Button title="Edit Journal"></Button>
      </View>
    </View>
  )
}
