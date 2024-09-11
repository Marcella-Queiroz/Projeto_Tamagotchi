import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Background from './background';

interface StatusProps {
    hunger: number;
    sleep: number;
    fun: number;
    navigateToHome: () => void;
}

const StatusScreen: React.FC<StatusProps> = ({ hunger, sleep, fun, navigateToHome }) => {
  const calculateStatus = () => {
    const total = hunger + sleep + fun;
    if (total > 200) return 'Feliz';
    if (total > 100) return 'Ok';
    return 'Triste';
  };

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={navigateToHome}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Fome: {hunger}</Text>
          <Text style={styles.statusText}>Sono: {sleep}</Text>
          <Text style={styles.statusText}>Diversão: {fun}</Text>
          <Text style={styles.statusText}>Status: {calculateStatus()}</Text>
        </View>
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
  },
  statusContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    marginVertical: 5,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left:172,
    backgroundColor: '#FF0000', // Vermelho
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFFFFF', // Branco
    fontSize: 16,
  },
});

export default StatusScreen;
