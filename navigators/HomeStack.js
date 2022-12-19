import { createStackNavigator } from "@react-navigation/stack"

// Screens
import Home from '../screens/Home';
import Details from '../screens/Details';
import { colors } from "../config/theme";

const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
  let activeColors = colors

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          paddingLeft: 10,
        },
        headerStyle: {
          backgroundColor: activeColors.secondary,
        },
        headerTintColor: activeColors.tint,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen
