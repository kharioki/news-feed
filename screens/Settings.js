import { useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native'

// components
import MainContainer from '../components/containers/MainContainer';
import StyledText from '../components/texts/StyledText';
import SettingsItem from '../components/sections/SettingsItem';
import SettingsButton from '../components/sections/SettingsButton';

// data
import { newsData } from '../config/data';
import { colors } from '../config/theme';

const Settings = () => {
  let activeColors = colors;

  const [isActive, setIsActive] = useState(false);
  const toggleSwitch = () => setIsActive(previousState => !previousState);

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
        <SettingsButton label="Light" icon="lightbulb-on" isActive={true} />
        <SettingsButton label="Dark" icon="weather-night" isActive={false} />
        <SettingsButton label="System" icon="theme-light-dark" isActive={false} />
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
