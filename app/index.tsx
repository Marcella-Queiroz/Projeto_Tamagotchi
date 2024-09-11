import React from 'react';
import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const Index = () => {
  return (
    <ImageBackground
      source={require('../assets/images/walpaper.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Virtual Pet</Text> 
          <Text style={styles.subtitle}>Tamagotchi</Text>
        </View>
        
        <Link href={"/SelectionPet"} style={styles.startText}>Clique para começar</Link>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Desenvolvido por: Marcella Queiroz</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    position: 'relative',
  },
  title: {
    color: '#FFD700', // Amarelo
    fontSize: 50, // Tamanho da fonte
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -100,
    textShadowColor: '#FF0000', // Sombra
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
  },
  subtitle: {
    color: '#FF0000', // Vermelho
    fontSize: 18,
    position: 'absolute', // Posicionamento absoluto
    bottom: 5, 
    right: 0,
  },
  startText: {
    color: '#FF0000', // Vermelho
    fontSize: 38, // Tamanho da fonte
    marginTop: 50,
    fontFamily: 'LondrinaOutline-Regular', // Fonte Londrina...
    textDecorationLine: 'none', // Remove o sublinhado
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    color: '#808080', // Cor do texto
    fontSize: 16,
  },
});
