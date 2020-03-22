import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

//App separando icones para plataformas.js

export default class App extends React.Component {
   //Ele utiliza a estilização 'inline' quando é uma ou no máximo duas estilização.
  render() {
        return ( 
          
            <View style={styles.container}>
              { Platform.OS === 'ios'
                ? <Ionicons name='ios-pizza' size={100} color='red'/>
                : <Ionicons name='md-pizza' size={100} color='red'/>}
            </View>
         
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginLeft: 10, 
    marginRight: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
})