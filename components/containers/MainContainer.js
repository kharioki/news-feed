import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'

import { colors } from '../../config/theme'

const MainContainer = ({ children, style, ...props }) => {
  let activeColors = colors
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[{ backgroundColor: activeColors.primary }, style]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainContainer