import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Background from '../background';
import StatusScreen from '../status';
import JogoDaVelha from '../jogoDaVelha';
import Forca from '../Forca'; 

const Jogos: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [statusProps, setStatusProps] = useState({ hunger: 80, sleep: 70, fun: 90 });
  const [showGameOptions, setShowGameOptions] = useState(false);

  const navigateToStatus = () => {
    setStatusProps({ hunger: 80, sleep: 70, fun: 90 });
    setCurrentScreen('Status');
  };

  const navigateToHome = () => {
    setCurrentScreen('Home');
  };

  const toggleGameOptions = () => {
    setShowGameOptions(!showGameOptions);
  };

  const navigateToJogoDaVelha = () => {
    setCurrentScreen('JogoDaVelha');
  };

  const navigateToForca = () => {
    setCurrentScreen('Forca');
  };

  return (
    <Background>
      <View style={styles.container}>
        {currentScreen === 'Home' && (
          <>
            <TouchableOpacity onPress={navigateToStatus} style={styles.menuButton}>
              <Text style={styles.menuButtonText}>Status</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/duckyAnimation-resize.gif')} style={styles.image} />
            <TouchableOpacity onPress={toggleGameOptions} style={styles.gameControllerButton}>
              <Image source={require('../../assets/images/controle.png')} style={styles.gameControllerImage} />
            </TouchableOpacity>
            {showGameOptions && (
              <View style={styles.gameOptionsContainer}>
                <TouchableOpacity style={styles.gameOptionButton} onPress={navigateToJogoDaVelha}>
                  <Text style={styles.gameOptionText}>Jogo da Velha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameOptionButton} onPress={navigateToForca}>
                  <Text style={styles.gameOptionText}>Forca</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        )}
        {currentScreen === 'Status' && <StatusScreen {...statusProps} navigateToHome={navigateToHome} />}
        {currentScreen === 'JogoDaVelha' && <JogoDaVelha navigateToHome={navigateToHome} />}
        {currentScreen === 'Forca' && <Forca navigateToHome={navigateToHome} />}
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
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  gameControllerButton: {
    position: 'absolute',
    bottom: 80,
    right: 140,
  },
  gameControllerImage: {
    width: 120,
    height: 120,
  },
  gameOptionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
  gameOptionButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  gameOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Jogos;
