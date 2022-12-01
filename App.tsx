import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerControll from './src/navigate/drawer';
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <DrawerControll />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App;

