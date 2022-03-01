import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const AppText = (props) => {
  const getStyle = ({weight, size}) => {
    let completeStyles = [styles.text];
    if (size === 'large') {
      completeStyles = [...completeStyles, styles.large]
    }
    if (size === 'larger') {
      completeStyles = [...completeStyles, styles.larger]
    }
    if (weight === 'bolder') {
      completeStyles = [...completeStyles, styles.bolder]
    }
    return completeStyles;
  }

  return (
    <Text style={[...getStyle(props), props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'Montserrat'
  },
  large: {
    fontSize: 24
  },
  larger: {
    fontSize: 36
  },
  bolder: {
    fontWeight: "500"
  }
})

export default AppText;