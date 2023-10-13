import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

import { Colors } from '../../constants/colors';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={changeTitleHandler} />
      </View>
      <ImagePicker />
      <LocationPicker />
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
