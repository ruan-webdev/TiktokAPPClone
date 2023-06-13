import { View, StyleSheet, Text} from 'react-native'

export function Profile() {
  return (
    <View style={styles.container}>
      <Text>Pagina perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
