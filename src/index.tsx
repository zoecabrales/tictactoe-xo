import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import {useFonts, DeliusUnicase_400Regular, DeliusUnicase_700Bold} from '@expo-google-fonts/delius-unicase';

export default function App() {
  const [fontLoaded] =useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold
  })

if(!fontLoaded) return null
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25, fontFamily: "DeliusUnicase_700Bold" }}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
