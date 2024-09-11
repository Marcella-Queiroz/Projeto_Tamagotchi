import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SelectionPet = () => {
  const router = useRouter();

  const navigateToTabs = () => {
    router.push('/(tabs)');
  };

  const navigateToNewPet = () => {
    router.push('/NewPet'); 
  };

  return (
    <ImageBackground source={require('../assets/images/walpaper.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Virtual Pet</Text>
          <Text style={styles.subtitle}>Tamagotchi</Text>
        </View>
        <Text style={styles.sectionTitle}>Bichinhos criados</Text>

        <View style={styles.emptyBoxesContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.imageWrapper} onPress={navigateToTabs}>
              <Text style={styles.buttonText}>Patin</Text>
              <View>
                <Image 
                  source={require('../assets/images/duckyAnimation-resize.gif')} 
                  style={styles.buttonImage} 
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navigateToNewPet}>
              <Text style={styles.buttonText}>Criar  +</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    position: 'relative',
  },
  title: {
    color: '#FFD700',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -100,
    textShadowColor: '#FF0000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  subtitle: {
    color: '#FF0000',
    fontSize: 18,
    position: 'absolute',
    bottom: 5, 
    right: 0,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
    flex: 1,
    minHeight: 80,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  imageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 20,
    flex: 1,
    minHeight: 80,
    justifyContent: 'space-between',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  emptyBoxesContainer: {
    flexDirection: 'column',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 25,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SelectionPet;
