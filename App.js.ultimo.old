import React from 'react'
import { StyleSheet,
         View, 
         Text, 
         Slider,
         Switch,
         TextInput,
         KeyboardAvoidingView,
         Image
         } from 'react-native'
import AddEntry from './components/AddEntry'

export default class App extends React.Component {
    // state = {
    //     value: 0
    //   }

      state = {
        input: 'rafaelxdutra@gmail.com',
        showInput: false,
      }

      handleTextChange = (input) => {
        this.setState(() => ({
          input
        })

        )
      }

      handleToggleSwitch = () => {
        this.setState((state) => ({
          showInput: !state.showInput,
        }))
      }
  render() {
      const { input, showInput } = this.state

        return ( 
          // <AddEntry />
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Image
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
          style={styles.img}
        />
            <Switch
              value={showInput}
              onValueChange={this.handleToggleSwitch}
            />
          
            {showInput === true && (
              <TextInput 
                value={input}
                style={styles.input}
                onChangeText={this.handleTextChange}
              
              />
            )}

          </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginLeft: 10,
     marginRight: 10,
    // paddingTop: 25, 
    // backgroundColor: '#ecf0f1',
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