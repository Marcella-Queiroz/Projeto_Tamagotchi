import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Forca: React.FC<{ navigateToHome: () => void }> = ({ navigateToHome }) => {
  const words = ['BANANA', 'MAÇÃ', 'PERA'];
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (word.split('').every(letter => guesses.includes(letter))) {
      setWon(true);
      setTimeout(() => {
        navigateToHome();
      }, 2000); // Volta ao menu após 2 segundos
    }
  }, [guesses]);

  const handleGuess = () => {
    if (input.length === 1 && !guesses.includes(input)) {
      setGuesses([...guesses, input]);
    }
    setInput('');
  };

  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <Text key={index} style={styles.letter}>
        {guesses.includes(letter) ? letter : '_'}
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      {won ? (
        <Text style={styles.title}>Você acertou!</Text>
      ) : (
        <>
          <Text style={styles.title}>Jogo da Forca</Text>
          <Text style={styles.title}>Frutas</Text>
          <View style={styles.wordContainer}>{renderWord()}</View>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            maxLength={1}
            autoCapitalize="characters"
          />
          <TouchableOpacity onPress={handleGuess} style={styles.button}>
            <Text style={styles.buttonText}>Adivinhar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToHome} style={styles.button}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  wordContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  letter: {
    fontSize: 32,
    marginHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    width: 50,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Forca;
