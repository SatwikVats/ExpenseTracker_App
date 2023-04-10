import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

function MyBottomSheet({ isModalVisible, toggleModal }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSave = () => {
    console.log('Amount:', amount);
    console.log('Description:', description);
    console.log('Date:', date);
    toggleModal();
  };

  const onChangeText = (text) => {
    setAmount(text);
  };

  const onChangeDescription = (text) => {
    setDescription(text);
  };

  const onChangeDate = (text) => {
    setDate(text);
  };

  return (
    <Modal isVisible={isModalVisible}>
      <View style={styles.bottomModal}>
        <Text style={styles.title}>New Transaction</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={amount}
          placeholder="Amount"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeDescription}
          value={description}
          placeholder="Description"
          keyboardType="default"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          value={date}
          placeholder="Date"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bottomModal: {
    alignItems: 'center',
    height: 800,
    width: 400,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    margin: 20,
    bottom: -5,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#F9C201',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MyBottomSheet;
