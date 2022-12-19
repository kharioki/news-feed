import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from "@expo/vector-icons"

// stacks
import HomeStackScreen from './HomeStack'

// Screens
import Settings from '../screens/Settings';
import { colors } from "../config/theme";

const Tab = createBottomTabNavigator()

const RootStack = () => {
  let activeColors = colors

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName

            if (route.name === 'Trending') {
              iconName = 'trending-up'
            } else if (route.name === 'Settings') {
              iconName = 'cog'
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: activeColors.accent,
          tabBarInactiveTintColor: activeColors.tertiary,
          tabBarStyle: {
            backgroundColor: activeColors.secondary,
          },
          tabBarShowLabel: false,
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: activeColors.secondary,
          },
          headerTitleStyle: {
            paddingLeft: 10,
          },
          headerTintColor: activeColors.tint,
        })}
      >
        <Tab.Screen name="Trending" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
