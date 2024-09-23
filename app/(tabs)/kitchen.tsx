import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, PanResponder } from 'react-native';
import Background from '../background';
import StatusScreen from '../status';

const Kitchen = () => {
  const [currentScreen, setCurrentScreen] = useState('Kitchen');
  const [statusProps, setStatusProps] = useState({ hunger: 80, sleep: 70, fun: 90 });
  const [showFood, setShowFood] = useState(true);
  const [foodPosition, setFoodPosition] = useState({ x: 180, y: 650 }); 

  const navigateToStatus = () => {
    setStatusProps({ hunger: 80, sleep: 70, fun: 90 });
    setCurrentScreen('Status');
  };

  const navigateToKitchen = () => {
    setCurrentScreen('Kitchen');
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      setFoodPosition({ x: gestureState.moveX, y: gestureState.moveY });
    },
    onPanResponderRelease: () => {
      if (foodPosition.x > 210 && foodPosition.x < 280 && foodPosition.y > 300 && foodPosition.y < 370) {
        setShowFood(false);
        setStatusProps(prevState => ({ ...prevState, hunger: prevState.hunger + 10 }));
        setTimeout(() => {
          setFoodPosition({ x: 180, y: 650 });
          setShowFood(true);
        }, 500); 
      }
    },
  });

  return (
    <Background>
      <View style={styles.container}>
        {currentScreen === 'Kitchen' && (
          <>
            <TouchableOpacity
              onPress={navigateToStatus}
              style={styles.menuButton}
            >
              <Text style={styles.menuButtonText}>Status</Text>
            </TouchableOpacity>
            <Image source={require('../../assets/images/duckyAnimation-resize.gif')} style={styles.image} />
            {showFood && (
              <View
                {...panResponder.panHandlers}
                style={[styles.food, { left: foodPosition.x, top: foodPosition.y }]}
              >
                <Image source={require('../../assets/images/apple.png')} style={styles.foodImage} />
              </View>
            )}
          </>
        )}
        {currentScreen === 'Status' && (
          <StatusScreen {...statusProps} navigateToHome={navigateToKitchen} />
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
  food: {
    position: 'absolute',
    width: 70,
    height: 70,
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
});

export default Kitchen;
