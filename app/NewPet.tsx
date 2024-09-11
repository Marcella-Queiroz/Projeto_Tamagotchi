import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import Background from './background';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Pato");
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const navigateToSelectionPet = () => {
    router.push('/SelectionPet'); // Substitua o caminho conforme necessário
  };

  const getImageSource = (animal) => {
    switch (animal) {
      case "Pato":
        return require('../assets/images/duckAnimationPisc.gif');
      case "Gato":
        return require('../assets/images/duckAnimationPisc.gif');
      case "Ganso":
        return require('../assets/images/ganso.gif');
      case "Cachorro":
        return require('../assets/images/duckAnimationPisc.gif');
      default:
        return require('../assets/images/duckAnimationPisc.gif');
    }
  };

  const handleAnimalSelect = (animal) => {
    setSelectedValue(animal);
    setModalVisible(false); // Fecha o modal após a seleção
  };

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Text style={styles.backText}>{"❮"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Novo Jogo</Text>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Animal:</Text>
        <View style={styles.animalBox}>
          <Image source={getImageSource(selectedValue)} style={styles.animalImage} />
          <Text style={styles.animalText}>{selectedValue}</Text>
        </View>
        <TouchableOpacity style={styles.chooseButton} onPress={() => setModalVisible(true)}>
          <Text>Escolher ⋯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createButton} onPress={navigateToSelectionPet}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Escolha um animal:</Text>
              <View style={styles.animalGrid}>
                {["Pato", "Gato", "Cachorro"].map((animal) => (
                  <TouchableOpacity
                    key={animal}
                    style={styles.animalOption}
                    onPress={() => handleAnimalSelect(animal)}
                  >
                    <Image source={getImageSource(animal)} style={styles.animalImage} />
                    <Text style={styles.animalText}>{animal}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              <Button title="Fechar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 130, // Ajuste o valor conforme necessário
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
  backText: {
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    position: 'absolute',
    top: 40,
    left: 40,
  },
  label: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 15,
    right: 120,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
  animalBox: {
    width: 115,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    borderRadius: 10,
  },
  animalImage: {
    width: 70,
    height: 70,
  },
  animalText: {
    fontSize: 18,
  },
  chooseButton: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  createButton: {
    marginTop:60,
    backgroundColor:'#c43434',
    paddingTop: 15,
    paddingRight: 60,
    paddingBottom: 15,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color:'#FFD700',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  animalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  animalOption: {
    alignItems: 'center',
    marginBottom: 20,
    width: '50%',
  },
});

export default App;
