import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform } from 'react-native'

import { Ionicons, MaterialIcons } from '@expo/vector-icons'


export function Home() {
  return (
    <View style={styles.container}>

       <View style={styles.labels}>

        <TouchableOpacity style={styles.liveButton}>
            <MaterialIcons name="live-tv" size={24} color="#FFF" />
        </TouchableOpacity>

          <TouchableOpacity style={{marginLeft: 20}}>
            <Text style={[styles.labelText,  { color: "#DDD"}]}>Following</Text>
            <View style={styles.notificationDot}></View>
          </TouchableOpacity>

          
          <TouchableOpacity>
            <Text style={[styles.labelText, { color: "#FFF"}]}>For You</Text>
            <View style={styles.indicator}></View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#FFF" />
          </TouchableOpacity>

       </View>

    </View>
  )
}

const styles = StyleSheet.create({


    container: {
      flex: 1,
      backgroundColor: "#010101"
    },

    labels: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      position: 'absolute',
      top: 6,
      left: 0,
      right: 0,
      // o marginTop junto ao platform serve para dar um espaçamento entre o topo da tela e o conteudo da pagina baseado na plataforma
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 :  55,
      // o ZIndex 99 serve para garantir que o conteudo fique por cima do conteudo da tela
      zIndex: 99,
    },

    labelText: {
      fontSize: 16,
      fontWeight: 500,
      marginBottom: 4,
      
    },

    notificationDot: {
      backgroundColor: "red",
      width: 8,
      height: 8,
      borderRadius: 4,
      position: "absolute",
      top: -3,
      right: -8,
    },

    indicator: {
      backgroundColor: "#FFF",
      width: 32,
      height: 2,
      alignSelf: 'center',
    },

    searchButton: {
      position: "absolute",
      top: 0,
      right: 20,
      zIndex: 99,
    },

    liveButton: {
      position: "absolute",
      top: 0,
      left: 20,
      zIndex: 99,
    },

},

)
