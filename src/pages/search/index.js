import { View, StyleSheet, Text} from 'react-native'

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Pagina buscar</Text>
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
