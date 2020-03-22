import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class App extends React.Component {
   //Ele utiliza a estilização 'inline' quando é uma ou no máximo duas estilização.
  render() {
        return ( 
          
            <View style={styles.container}>
              <Text style={{color: 'red'}}>Hello!</Text>
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