import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
    console.log("aaa");
  };
  

  return (
    <ImageBackground
      style={styles.fondo}
    >
      <View style={styles.contenedor}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        
        <TouchableOpacity style={styles.boton} onPress={incrementar}>
          <Text style={styles.textoBoton}>{contador}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  texto: {
    fontSize: 26,
    color: 'white',
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#00bcd4',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
