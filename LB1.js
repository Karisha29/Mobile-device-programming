import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(null);

  const calculateExpression = () => {
    const x = 4;
    const y = 2;
    const a = parseFloat(inputValue);
    const calculatedResult = (Math.cos(Math.pow(x, 3)) + 6 - Math.sin(y - a))/(Math.log(Math.pow(x, 4)) - 2 * Math.pow(Math.sin(x), 5));
    setResult(calculatedResult);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Обчислення виразу</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Введіть значення a:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setInputValue}
          value={inputValue}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateExpression}>
        <Text style={styles.buttonText}>Обчислити</Text>
      </TouchableOpacity>
      {result !== null &&
        <Text style={styles.result}>Результат: {result}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});