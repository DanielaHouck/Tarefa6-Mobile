import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function TelaPrincipal({navigation}) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Olá, bem Vindo!</Text>
      <Text style={styles.subtitulo}>Navegue entre as páginas.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela1')}>
        <Text style={styles.buttonText}>Tela1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela2')}>
        <Text style={styles.buttonText}>Tela2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela3')}>
        <Text style={styles.buttonText}>Tela3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela4')}>
        <Text style={styles.buttonText}>Tela4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela5')}>
        <Text style={styles.buttonText}>Tela5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela6')}>
        <Text style={styles.buttonText}>Tela6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela7')}>
        <Text style={styles.buttonText}>Tela7</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    position:'absolute',
    top:35,
    color: "#1503A6",
  },
  subtitulo:{
    fontSize: 20,
    position:'absolute',
    top:80,
    color: "#555",
  },
  button: {
    flex: 0.07,
    alignItems:'center',
    justifyContent:'center',
    margin:5,
    backgroundColor: "#f26b11",
    borderRadius: 10,
    width: 180,
  },
  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color:"#EDEEff",
  },

})