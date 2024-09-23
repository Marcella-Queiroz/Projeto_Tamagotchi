import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { getPetImage } from './geral/getPetImage';
import { useTamagotchidb } from './database/tamagotchidb';
import { ImagesPet, TamagochiType } from '../assets/images/ImagesPet';
import Background from './background';
 

const NewPet = () => {
  const [selectedImage, setSelectedImage] = useState<TamagochiType | null>(null);
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const database = useTamagotchidb();


  const handleCreateTamagochi = async () => {
    if (!name) {
      return Alert.alert('Por favor, insira um nome para o Tamagochi.');
    }
    if (!selectedImage) {
      return Alert.alert('Por favor, selecione uma imagem para o Tamagochi.');
    }
    try {
      const id = await database.createPet({
        name: name,
        tamagochi_id: selectedImage
      });
      Alert.alert('Tamagochi criado com sucesso!', `ID: ${id}`);
      setName('');
      setSelectedImage(null);
      router.back();
    } catch (error) {
      console.error('Erro ao criar o Tamagochi:', error);
    }
  };

  const handleImageSelect = (image: TamagochiType) => {
    setSelectedImage(image);
    setModalVisible(false);
  };

  const selectedImageSource = selectedImage ? getPetImage('muito_bem', selectedImage) : null;

  return (
    <Background>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>{"❮"}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Criar Tamagochi</Text>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Imagem:</Text>
        <View style={styles.animalBox}>
          {selectedImageSource && (
            <Image source={selectedImageSource} style={styles.animalImage} />
          )}
          <Text style={styles.animalText}>{selectedImage ? selectedImage : 'Nenhuma imagem selecionada'}</Text>
        </View>

        <TouchableOpacity style={styles.chooseButton} onPress={() => setModalVisible(true)}>
          <Text>Escolher Imagem ⋯</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createButton} onPress={handleCreateTamagochi}>
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
              <Text style={styles.modalTitle}>Escolha uma imagem:</Text>
              <View style={styles.animalGrid}>
                {Object.keys(ImagesPet.muito_bem).map((key) => (
                  <TouchableOpacity
                    key={key}
                    style={styles.animalOption}
                    onPress={() => handleImageSelect(key as TamagochiType)}
                  >
                    <Image
                      source={getPetImage('muito_bem', key as TamagochiType)}
                      style={styles.animalImage}
                    />
                    <Text style={styles.animalText}>{key}</Text>
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
    paddingTop: 130,
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
    backgroundColor: '#c43434',
    paddingTop: 15,
    paddingRight: 60,
    paddingBottom: 15,
    paddingLeft: 60,
    borderWidth: 1,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFD700',
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

export default NewPet;
