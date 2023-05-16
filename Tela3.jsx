import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela 3</Text>
      <View style={styles.buttonNav}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Tela4')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEEff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 80,
    position:'absolute',
    top:35,
    color: "#1503A6",
    marginTop: 40,
  },
  buttonNav:{
    width:'90%',
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },
  button: {
    backgroundColor: "#f26b11",
    borderRadius: 10,
    width: "30%",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:5,
    color:"#EDEEff",
  },
})