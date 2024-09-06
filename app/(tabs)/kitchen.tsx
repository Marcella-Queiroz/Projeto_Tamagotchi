import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Background from '../background';


const Kitchen = () => {
    return (
        <Background>
          <View style={styles.container}>
            <Image source={require('../../assets/images/duckyAnimation-resize.gif')} style={styles.image} />
          </View>
        </Background>
      );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    image: {
      width: 300,
      height: 300,
    },
  });
export default Kitchen;
