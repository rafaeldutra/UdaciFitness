import React from 'react'
import {  View } from 'react-native'
import AddEntry from './components/AddEntry'
import { creatStore } from 'redux'
import { Provider, createStoreHook } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
   
  render() {
        return ( 
          <Provider store={createStore(reducer}>
            <View>
              <AddEntry/>
            </View>
          </Provider>
    )
  }
}