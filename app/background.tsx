import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/walpaperzoom.png')}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Background;

