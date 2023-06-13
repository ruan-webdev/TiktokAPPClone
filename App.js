import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'
import { StatusBar } from 'react-native'



export default function App() {
  return (
    /* 
      esse background transparent junto ao translucent e barstyle light-content serve para definir o conteudo como transparente
      e fazer com que o conteudo fique por cima da status bar, e não por baixo como é o padrão
      além de que o status bar style light-content serve para definir a cor dos icones da status bar como branco
      o que é uma boa pratica para quando o background é escuro
    **/
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} translucent={true} barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

