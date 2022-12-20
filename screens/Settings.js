import { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native'
import { useContext } from 'react'

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/texts/StyledText';
import SettingsItem from '../components/sections/SettingsItem';
import SettingsButton from '../components/sections/SettingsButton';

// data
import { colors } from '../config/theme';
import { ThemeContext } from '../contexts/ThemeContext'

const Settings = () => {
  const { theme, updateTheme } = useContext(ThemeContext)
  let activeColors = colors[theme.mode];

  const [isActive, setIsActive] = useState(theme.mode === 'dark');
  const toggleSwitch = () => {
    updateTheme();
    setIsActive(previousState => !previousState)
  };

  return (
    <MainContainer style={styles.container}>
      <StyledText bold style={[{ color: activeColors.accent }, styles.title]}>
        User
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Name">
          <StyledText>Tony Stark</StyledText>
        </SettingsItem>
        <SettingsItem label="Joined on">
          <StyledText>11/12/2022</StyledText>
        </SettingsItem>
      </View>

      <StyledText bold style={[{ color: activeColors.accent }, styles.title]}>
        Theme Switch
      </StyledText>

      <View style={styles.section}>
        <SettingsItem label="Dark Mode">
          <Switch
            value={isActive}
            onValueChange={toggleSwitch}
            thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
            ios_backgroundColor={activeColors.primary}
            trackColor={{ false: activeColors.primary, true: activeColors.tertiary }}
          />
        </SettingsItem>
      </View>

      <StyledText bold style={[{ color: activeColors.accent }, styles.title]}>
        Theme Settings
      </StyledText>

      <View style={styles.section}>
        <SettingsButton
          label="Light"
          icon="lightbulb-on"
          isActive={theme.mode === 'light' && !theme.system}
          onPress={() => updateTheme({ mode: 'light' })}
        />
        <SettingsButton
          label="Dark"
          icon="weather-night"
          isActive={theme.mode === 'dark' && !theme.system}
          onPress={() => updateTheme({ mode: 'dark' })}
        />
        <SettingsButton
          label="System"
          icon="theme-light-dark"
          isActive={theme.system}
          onPress={() => updateTheme({ system: true })}
        />
      </View>
    </MainContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginTop: 20,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

export default Settings
