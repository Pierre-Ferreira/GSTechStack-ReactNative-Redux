import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const CardSection = (props) => {
  return (
    <TouchableOpacity style={styles.containerStyles} onPress={props.onPressFn}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
