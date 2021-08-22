import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity
    onPress={onPress}
    // onLayout={(event) => {
    //   var {x, y, width, height} = event.nativeEvent.layout;
    //   console.log('Buttonheight', height);
    // }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#2a2f3d'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  }
})