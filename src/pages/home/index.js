import { useState, useRef } from 'react'

import { View, StyleSheet, Text, TouchableOpacity, StatusBar, Platform, FlatList, Dimensions } from 'react-native'

import { Ionicons, MaterialIcons } from '@expo/vector-icons'


import { FeedItem } from '../../components/FeedItem'


const { height: heightScreen } = Dimensions.get('screen')

export function Home() {


  let feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/sfHqqzc.mp4',
      name: '@ruanzoka1',
      description: 'Bobbyinho em call com seu amigo',
     },
    {
      id: '2', 
      video: 'https://i.imgur.com/NvBaHTt.mp4',
      name: '@ruanzoka1',
      description: 'Funny bird moments',
     },
    {
      id: '3', 
      video: 'https://i.imgur.com/scAidDo.mp4',
      name: '@ruanzoka1',
      description: 'Meme compilation with animals', 
     }
  ]


  // nessa variavel, o meu useState junto ao feedItems[0] serve para que o primeiro item do meu feed seja o primeiro item do meu array
  const [showItem, setShowItem] = useState(feedItems[0])

  // nessa referencia, eu estou pegando o item que esta sendo exibido na tela e passando para a variavel showItem que por sua vez, vai ser passada para o meu componente FeedItem
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index])
    }
  }) 



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

       <FlatList 
          data={feedItems}
          renderItem={ ({item} ) => <FeedItem data={item} currentVisibleItem={showItem} /> }
          onViewableItemsChanged={onViewRef.current }
          snapToAlignment={'center'}
          snapToInterval={heightScreen - 50}
          scrollEventThrottle={200}
          decelerationRate={'fast'}
          viewabilityConfig={{
            waitForInteraction: false,
            viewAreaCoveragePercentThreshold: 100,

            // o viewAreaCoveragePercentThreshold serve para que o meu item seja considerado visivel quando ele estiver 100% visivel na tela
            // o waitForInteraction serve para que o meu item seja considerado visivel quando ele estiver 100% visivel na tela
          }}
          showVerticalScrollIndicator={false}
        />
        

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
