import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const calculateLimits = () => {
    const ageNumber = parseInt(age, 10);
    if(isNaN(ageNumber) || ageNumber <=0){
      setLimits('Please enter a valid age');
      return;
    }
    const lower = Math.round((220 - ageNumber) * 0.65);
    const upper = Math.round((220- ageNumber) * 0.85);
    setLimits(`${lower} - ${upper}`);
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
      />

      <Text>Limit</Text>
      <Text>{limits}</Text>

      <Button title="Calculate" onPress={calculateLimits} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
