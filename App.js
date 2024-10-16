import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(0);
  const [calcularPressionado, setCalcularPressionado] = useState(false); // Novo estado para controlar a exibição

  const calcular = () => {
    let alturaNum = parseFloat(altura);
    let pesoNum = parseFloat(peso);

    if (alturaNum > 0 && pesoNum > 0) {
      let resultado = pesoNum / (alturaNum * alturaNum);
      setIMC(resultado.toFixed(2)); // Formata o resultado com 2 casas decimais
      setCalcularPressionado(true); // Atualiza o estado para indicar que o cálculo foi feito
    } else {
      setIMC(0);
      setCalcularPressionado(false); // Reseta o estado se os valores forem inválidos
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura (m)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          keyboardType="numeric"
          placeholder="Ex: 1.75"
          placeholderTextColor="#aaa"
          color="#000"
        />

        <Text style={styles.label}>Peso (kg)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPeso}
          value={peso}
          keyboardType="numeric"
          placeholder="Ex: 70"
          placeholderTextColor="#aaa"
          color="#000"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>CALCULAR</Text>
      </TouchableOpacity>

      {/* Condicional para exibir o resultado apenas após o cálculo */}
      {calcularPressionado && (
        <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
