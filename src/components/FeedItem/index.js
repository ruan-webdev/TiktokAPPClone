import { useRef, useState, useEffect} from 'react'
import { View, StyleSheet, Pressable, Dimensions, Text, TouchableOpacity, Platform } from 'react-native'
import { Video } from 'expo-av'
import { Ionicons } from '@expo/vector-icons'

const { height: heightScreen} = Dimensions.get('screen')

export function FeedItem({ data, currentVisibleItem }) {

    const video = useRef(null);

    const [status, setStatus] = useState({})


    useEffect(() => {
        if (currentVisibleItem?.id === data?.id) {
            video.current?.playAsync()
        }
        else {
            video.current?.pauseAsync()
        }
    }, [currentVisibleItem])
    

    function handlePlayer() {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
    }

  return (
    <View>

        <View style={[styles.info, {bottom: 90}]}>
            <Text style={styles.name}>{data?.name}</Text>
            <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
        </View>

        <View style={styles.actions}>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="heart" size={35} color="#FFF" />
                <Text style={styles.actionText}>5.5K</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="chatbubble-ellipses" size={35} color="#FFF" />
                <Text style={styles.actionText}>180</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="bookmark" size={35} color="#FFF" />
                <Text style={styles.actionText}>50</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="arrow-redo" size={35} color="#FFF" />
                <Text style={styles.actionText}>800</Text>
            </TouchableOpacity>
        </View>

        <Pressable onPress={handlePlayer}>
            <Video
                source={{ uri: data?.video }}
                ref={video}
                style={{ width: '100%', height: heightScreen - 50  }}
                resizeMode="cover"
                shouldPlay={false}
                isMuted={false}
                isLooping
                onPlaybackStatusUpdate={
                    status => setStatus(() => status)
                }
            />

        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({

    info: {
        position: 'absolute',
        zIndex: 99,
        marginLeft: 10,
    },

    name: {
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 4,
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8,
    },

    description: {
        color: '#FFF',
        textShadowColor: 'rgba(0,0,0,0.20)',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8,
        marginRight: 24,
    },

    actions: {
        position: 'absolute',
        zIndex: 99,
        right: 10,
        bottom: Platform.OS === 'android' ? 90 : 170,
        gap: 15,
    },

    actionText: {
        textAlign: 'center',
        color: '#FFF',
        textShadowColor: 'rgba(0,0,0,0.60)',
        textShadowOffset: { width: -1, height: 1.5 },
        textShadowRadius: 8,
    },

})