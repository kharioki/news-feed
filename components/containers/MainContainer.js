import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { colors } from '../../config/theme'

const MainContainer = ({ children, style, ...props }) => {
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[{ backgroundColor: activeColors.primary }, style]}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
        <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
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