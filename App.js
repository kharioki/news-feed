import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { ThemeContext } from './contexts/ThemeContext';
import { storeData, getData } from './config/asyncStorage';
import RootStack from './navigators/RootStack';

// keep splash screen open until theme is fetched
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState({ mode: 'light' });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        mode = Appearance.getColorScheme();
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData('newsFeedTheme', newTheme);
  };

  // monitor for system theme changes
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ mode: colorScheme, system: true });
    });
  }

  const fetchStoredTheme = async () => {
    try {
      const storedTheme = await getData('newsFeedTheme');

      if (storedTheme) {
        updateTheme(storedTheme);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 1000)
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
