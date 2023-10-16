import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';
import Button from '../UI/Button';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [selectLocation, setSelectLocation] = useState();
  const [takeImage, setTakeImage] = useState();

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const pickImage = (pickedImage) => {
    setTakeImage(pickedImage);
  };

  const pickLocation = (pickedLocation) => {
    setSelectLocation(pickedLocation);
  };

  const addPlaceHandler = () => {
    console.log(enteredTitle);
    console.log('In PlaceForm', takeImage);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} />
      </View>
      <ImagePicker onPickImage={pickImage} />
      <LocationPicker onPickLocation={pickLocation} />
      <Button onPress={addPlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    color: Colors.primary500,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  input: {
    backgroundColor: Colors.primary100,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    fontSize: 16,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
});
