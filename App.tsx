import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Login from './screen/src/Login'
import Registro from './screen/src/Registro'
//import Registro from './screen/src/registro'



const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<Login/>*/}
      <Registro/>
    </SafeAreaView>

  )
}
export default App
