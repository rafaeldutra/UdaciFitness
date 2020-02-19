import React from 'react'
import { StyleSheet,
         View, 
         Image
         } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {

  render() {
      return ( 
      <View style={styles.container}>
        <Image style={styles.img} source={require('./rafael.png')}/>
        <View style={{margin: 50}}/>
        <Image style={styles.img} source={{uri: 'https://secure.gravatar.com/avatar/4d4cc19f5ee4218bbe8e61540a3e6108'}}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginLeft: 10,
     marginRight: 10,
     justifyContent: 'center',
     alignItems: 'center'
     
    },
    input: {
      width: 200,
      height: 44,
      padding: 8,
      borderWidth: 1,
      borderColor: '#757575',
      margin: 50,
    },
  img: {
    width: 100,
    height: 100,
    margin: 50
  }
  });