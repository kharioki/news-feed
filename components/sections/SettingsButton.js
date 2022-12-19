import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors } from '../../config/theme'
import StyledText from '../texts/StyledText'

const SettingsButton = ({ label, icon, isActive, ...props }) => {
  let activeColors = colors

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: activeColors.secondary,
        },
        styles.settingsItem,
      ]}
      {...props}
    >
      <View style={styles.labelGroup}>
        <MaterialCommunityIcons name={icon} size={24} color={activeColors.tertiary} style={styles.icon} />
        <StyledText style={[{ color: activeColors.tertiary }, styles.label]}>
          {label}
        </StyledText>
      </View>
      <MaterialCommunityIcons
        size={24}
        name={isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
        color={isActive ? activeColors.accent : activeColors.tertiary}
      />
    </TouchableOpacity>
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
  labelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsButton
