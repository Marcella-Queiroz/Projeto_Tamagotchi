import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Background from '../background';
import StatusScreen from '../status';

const Room = () => {
  const [currentScreen, setCurrentScreen] = useState('Room');
  const [statusProps, setStatusProps] = useState({ hunger: 80, sleep: 70, fun: 90 });
  const [isLightOn, setIsLightOn] = useState(true);

  const navigateToStatus = () => {
    setStatusProps({ hunger: 80, sleep: 70, fun: 90 });
    setCurrentScreen('Status');
  };

  const navigateToRoom = () => {
    setCurrentScreen('Room');
  };

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <Background>
      <View style={styles.container}>
        {!isLightOn && <View style={styles.overlay} />}
        {currentScreen === 'Room' && (
          <>
            <TouchableOpacity
              onPress={navigateToStatus}
              style={styles.menuButton}
            >
              <Text style={styles.menuButtonText}>Status</Text>
            </TouchableOpacity>
            <Image
              source={require('../../assets/images/Ninho.png')}
              style={[styles.imageNinho, !isLightOn && styles.darkImage]}
            />
            <Image
              source={isLightOn ? require('../../assets/images/duckAnimationPisc.gif') : require('../../assets/images/duckNotPisc.png')}
              style={[styles.image, !isLightOn && styles.darkImage]}
            />
            <TouchableOpacity onPress={toggleLight} style={styles.lightButton}>              
              <Image
                source={isLightOn ? require('../../assets/images/light_on.png') : require('../../assets/images/light_off.png')}
                style={styles.lightImage}
              />
            </TouchableOpacity>
          </>
        )}
        {currentScreen === 'Status' && (
          <StatusScreen {...statusProps} navigateToHome={navigateToRoom} />
        )}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Camada de opacidade
  },
  image: {
    width: 200,
    height: 200,
    top: 25,
    left: 15,
    zIndex: 1, // Pato na frente
  },
  imageNinho: {
    position: 'absolute',
    zIndex: 0, // Ninho atrás
    top: 260,
  },
  darkImage: {
    opacity: 0.8, // Aplica um efeito de escurecimento leve
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#FF0000', // Vermelho
    padding: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#FFFFFF', // Branco
    fontSize: 16,
  },
  lightButton: {
    position: 'absolute',
    top: 620,
    alignSelf: 'center',
  },
  lightImage: {
    width: 130,
    height: 130,
  },
});

export default Room;
