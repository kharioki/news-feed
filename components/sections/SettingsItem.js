import { View, StyleSheet } from 'react-native'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { colors } from '../../config/theme'
import StyledText from '../texts/StyledText'

const SettingsItem = ({ children, label }) => {
  const { theme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode]

  return (
    <View
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
    >
      <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
        {label}
      </StyledText>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 2,
  },
  label: {
    fontStyle: 'italic',
  },
});

export default SettingsItem
